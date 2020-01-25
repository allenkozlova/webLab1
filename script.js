 ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [59.94, 30.32],
                zoom: 13
            }); 
            
            myPlacemark = new ymaps.Placemark([59.939046, 30.315797], {
                hintContent: 'Александровская колонна',
                balloonContent: 'Александровская колонна'
            },{
                preset: 'islands#redIcon'
            });
            myPlacemark1 = new ymaps.Placemark([59.939873, 30.314516], {
                hintContent: 'Государственный Эрмитаж',
                balloonContent: 'Эрмитаж'
            },{
                preset: 'islands#redIcon'
            });
             myPlacemark2 = new ymaps.Placemark([59.950224, 30.317509], {
                hintContent: 'Петропавловская Крепость',
                balloonContent: 'Петропавловская Крепость'
             },{
                preset: 'islands#redIcon',
                 iconGlyph: 'music'
            });
            myPlacemark3 = new ymaps.Placemark([59.933340, 30.337000], {
                hintContent: 'Паямятник Екатерина II',
                balloonContent: 'Екатерина II'
            },{
                preset: 'islands#redIcon'
            });
             myPlacemark4 = new ymaps.Placemark([59.934365, 30.324587], {
                hintContent: 'Казансктй собор',
                balloonContent: 'Казансктй собор'
             },{
                preset: 'islands#glyphIcon'
            });
            myPlacemark5 = new ymaps.Placemark([59.940064, 30.328682], {
                hintContent: 'Спас на Крови',
                balloonContent: 'Спас на Крови'
             },{
                preset: 'islands#yellowGlyphCircleIcon'
            });
            myPlacemark6 = new ymaps.Placemark([59.954007, 30.313829], {
                hintContent: 'Музей артиллерии',
                balloonContent: 'Музей артиллерии'
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark1);
            myMap.geoObjects.add(myPlacemark2);
            myMap.geoObjects.add(myPlacemark3);
            myMap.geoObjects.add(myPlacemark4);
            myMap.geoObjects.add(myPlacemark5);
            myMap.geoObjects.add(myPlacemark6);
        }