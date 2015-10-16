//map
var myMap;

// Дождёмся загрузки API и готовности DOM.

if(!$("#map").length == 0){
  ymaps.ready(init);
}

          function init () {
              // Создание экземпляра карты и его привязка к контейнеру с
              // заданным id ("map").
                          myMap = new ymaps.Map('map', {
                              // При инициализации карты обязательно нужно указать
                              // её центр и коэффициент масштабирования.
                              center: [55.748726277203595,49.19582350000003], // Москва
                              zoom: 15,
                              controls:[]
                          });

                      var myPlacemark = new ymaps.Placemark([55.748726277203595,49.19582350000003],
                         {
                        // Свойства.
                        hintContent: 'г. Казань, ул. Проспект Победы 202, офис 323'
                    },
                        {
                        iconImageHref: 'images/icons/mark.png',
                        iconImageSize: [72, 102],
                        iconImageOffset: [0, 0]
                        });

                      myMap.behaviors.disable('scrollZoom');
                      myMap.geoObjects.add(myPlacemark);

          }