'use strict'

var multiItemSlider = (function () {
	return function(selector) {
		var 
			_mainElement = document.querySelector(selector), // main element of the block
			_sliderWrapper = _mainElement.querySelector('.slider__container'),
			_sliderItems = _mainElement.querySelectorAll('.slider__item'),
			_sliderControls = _mainElement.querySelectorAll('.slider__control'),
			_sliderControlLeft = _mainElement.querySelector('.slider__control_left'),
			_sliderControlRight = _mainElement.querySelector('.slider__control_right'),
			// _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
			// _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),

			_numOfVisibleItems = 4,
			_positionLeftItem = 0,
			_transform = 0,
			_step = 1. / _numOfVisibleItems * 100,
			_items = [];

		_sliderItems.forEach(function (item, index) {
			_items.push({item: item, position: index, transform: 0});
		});

		var position = {
			getMin: 0,
			getMax: _items.length - 1,
		}

		var _transformItem = function (direction) {
			console.log('Called _transformItem: ' + direction)
			switch(direction) {
				case "right":
					console.log('moving right')
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
						_positionLeftItem <= position.getMin) {
						_sliderControlLeft.classList.remove("slider__control_show");
					}
					_positionLeftItem--;
					_transform += _step;
					break;
				default:
					console.log('Unexpected behaviour!')
					break;
			}
			_sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
		}

		var _controlClick = function (e) {
			if (e.target.classList.contains("slider__control")) {
				e.preventDefault();
				var direction = e.target.classList.contains("slider__control_right") ? "right" : "left";
				_transformItem(direction);
				console.log('clicked!' + ' ' + direction)
			}
		}

		var _setUpListeners = function () {
			_sliderControls.forEach(function (item) {
				item.addEventListener('click', _controlClick)
			});
		}

		_setUpListeners();

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

var slider = multiItemSlider('.slider');