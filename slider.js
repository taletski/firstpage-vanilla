'use strict'

var slider = multiItemSlider;

var multiItemSlider = (function () {
	return function(selector) {
		var 
			_mainElement = document.querySelector(selector), // main element of the block
			_sliderWrapper = _mainElement.querySelector('.slider__container'),
			_sliderItem = _mainElement.querySelector('.slider__item'),
			_sliderControls = _mainElement.querySelector('.slider__control'),
			_sliderControlLeft = _mainElement.querySelector('.slider__control_left'),
			_sliderControlRight = _mainElement.querySelector('.slider__control_right'),
			_wrapperWidth = parseFloat(getCompuedStyle(_sliderWrapper).width),
			_itemWidth = parseFloat(getCompuedStyle(_sliderItems[0]).width),

			_numOfVisibleItems = 4;
			_positionLeftItem = 0,
			_transform = 0,
			_step = 1. / _numOfVisibleItems * 100,
			_items = [] 

			_sliderItems.forEach( function (item, index) {
				_items.push({item: item, position: index, transform: 0});
			});

			var position = {
				getMin: 0,
				getMax: items.length - 1,
			}

			var _transformItem = function (direction) {
				switch(direction) {
					case "right":
						if ((_positionLeftItem + _numOfVisibleItems - 1) >= position.getMax) {
							return;
						}
						if (!_sliderControlRight.classList.contains("slider__control_show")){
							_sliderControl.classList.add("slider__control_show");
						}
						if (_sliderControlRight.classList.contains("slider__control_show") && 
							(_positionLeftItem + _numOfVisibleItems - 1) >= position.getMax) {
							_positionLeftItem.classList.remove("slider__control_show");
						}
						_positionLeftItem++;
						_transform -= _step;
						break;
					case 'left':
						if (_positionLeftItem <= position.getMin) {
							return;
						}
						if (!_sliderControlLeft.classList.contains("slider__control_show")) {
							_sliderControlLeft.classList.add("slider__control_show");
						}
						if (_sliderControlLeft.classList.contains("slider__control_show") && 
							_positionLeftItem <= positon.getMin) {
							_sliderControlLeft.classList.remove("slider__control_show");
						}
						_positionLeftItem--;
						_transform -= _step;
						break;
					default:
						break;
				}
			}

			var _controlClick = function (e) {
				if (e.target.classList.contains("slider__control")) {
					e.preventDefault();
					_direction = e.target.classList.contains("slider__control_right") ? "right" : "left";
					_transformItem(_direction);
				}
			}

			var _setUpListeners = function () {
				_sliderControl.forEach(function (item) {
					item.addEventListener('click', _controlClick)
				});
			}

			return {
				right: function () {
					_transformItem('right');
				},
				left: function () {
					_transformItem('left');
				}
			}

	}
}());