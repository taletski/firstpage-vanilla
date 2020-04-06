'use strict'

var multiItemSlider = (function () {
	return function(selector) {
		var 
			_mainElement = document.querySelector(selector),
			_sliderWrapper = _mainElement.querySelector('.slider__container'),
			_sliderItems = _mainElement.querySelectorAll('.slider__item'),
			_sliderControls = _mainElement.querySelectorAll('.slider__control'),
			_sliderControlLeft = _mainElement.querySelector('.slider__control_left'),
			_sliderControlRight = _mainElement.querySelector('.slider__control_right'),

			_numOfVisibleItems = 4,
			_positionLeftItem = 0,
			_transform = 0,
			_step = 1. / _numOfVisibleItems * 100;

		var position = {
			getMin: 0,
			getMax: _sliderItems.length - 1,
		}

		var _manageControlsVisibility = function () {
			_sliderControls.forEach(function (item) {
				if (!item.classList.contains('slider__control_show')) {
					item.classList.add('slider__control_show');
					console.log('refresh!')
				}
			});
			if (_sliderControlRight.classList.contains('slider__control_show') && 
				(_positionLeftItem + _numOfVisibleItems - 1) >= position.getMax) {
				_sliderControlRight.classList.remove('slider__control_show');
			}
			if (_sliderControlLeft.classList.contains('slider__control_show') && 
				_positionLeftItem <= position.getMin) {
				_sliderControlLeft.classList.remove('slider__control_show');
			}
		}

		var _transformItem = function (direction) {
			console.log('Called _transformItem: ' + direction)
			switch(direction) {
				case "right":
					if ((_positionLeftItem + _numOfVisibleItems - 1) >= position.getMax) {
						return;
					}
					_positionLeftItem++;
					_transform -= _step;
					break;
				case 'left':
					console.log('moving left');
					if ((_positionLeftItem) <= position.getMin) {
						return;
					}
					// if (!_sliderControlLeft.classList.contains('slider__control_show')) {
					// 	_sliderControlLeft.classList.add('slider__control_show');
					// }
					_positionLeftItem--;
					_transform += _step;
					break;
				default:
					console.log('Unexpected behaviour!')
					break;
			}
			_sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
			_manageControlsVisibility();
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

	}
}());

var slider = multiItemSlider('.slider');