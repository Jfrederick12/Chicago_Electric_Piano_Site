piano_content = [
  {
    make: 'Fender Rhodes',
    model: 'Mark I',
    year: '1973',
    description: 'This Fender Rhodes is from 1973, right in the heart of the early Fender Rhodes production period. We restored the piano with our “Rebirth” level of restoration services, virtually rebuilding the piano from scratch. Throughout the process we leveled the key bed and set the proper black key height, replaced all action felts and aging rubber components such as the grommets and hammer tips. Our goal was to keep the sound of the Rhodes as true to the sound of the 1973 production period by using only period-correct vintage parts and top quality reproduction parts that bring out the early Rhodes’ signature sound.',
    photo: 'http://chicagoelectricpiano.com/wp-content/uploads/2017/02/IMG_4876-800x600.jpg',
    price: 4000
  },
  {
    make: 'Fender Rhodes',
    model: 'Mark I',
    year: '1973',
    description: 'This Rhodes is from one of my personal favorite periods of Rhodes production in late 1975. During this period, the name Fender was dropped from the Rhodes branding but this period still has Torrington tines and cubed hammer tips that are essential to the “Fender Rhodes” production period. (This is similar to Silverface amplifiers that have Blackface parts if you are familiar with that crossover in production).

Cosmetically this Rhodes is nearly impeccable. The rear Rhodes logo was replaced with a reproduction and there are a couple of very small tolex tears that were glued to prevent any further fraying. The voice of the piano was fully restored with Retro Linear tone bar grommets and the original hammer tips were left in this piano to keep true to the original sound of the instrument. –Have a listen to the sound sample below!

As you have come to expect with our custom restorations, this Rhodes piano sounds and plays even better than it looks! The piano’s action was completely regulated with a leveled key bed. Action felts were replaced and a “pedestal bump” was added to give the Rhodes ideal dynamic response.',
    photo: 'http://chicagoelectricpiano.com/wp-content/uploads/2016/09/IMG_3750-800x600.jpg',
    price: 3299
  },
]

photo_content = [
  {
    name: 'overhead',
    description: 'detailed view capturing overhead angle',
    url: 'http://chicagoelectricpiano.com/wp-content/uploads/2017/02/IMG_4904-600x450.jpg',
    piano_id: 1
  },
  {
    name: 'side view',
    description: 'detailed view capturing the side angle',
    url: 'http://chicagoelectricpiano.com/wp-content/uploads/2017/02/IMG_4890-600x450.jpg',
    piano_id: 1
  },
  {
    name: 'cheek block',
    description: 'detailed view capturing the cheeck block',
    url: 'http://chicagoelectricpiano.com/wp-content/uploads/2017/02/IMG_4905-600x450.jpg',
    piano_id: 1
  },
  {
    name: 'tolex',
    description: 'detailed view capturing the custom tolex',
    url: 'http://chicagoelectricpiano.com/wp-content/uploads/2017/02/IMG_4888-800x600.jpg',
    piano_id: 1
  }
]

Piano.create!(piano_content)
Photo.create!(photo_content)

rhodes_main_photos = [
  'http://chicagoelectricpiano.com/wp-content/uploads/2016/08/IMG_3778-800x600.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2016/08/IMG_3696-800x600.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2016/04/IMG_3031-800x600.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2016/04/IMG_2989-800x600.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/11/Rhodes-Janus-I-Silver-800x600.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/10/IMG_1587-800x600.jpg'
]

wurly_main_photos = [
  'http://chicagoelectricpiano.com/wp-content/uploads/2014/08/DSC4140-600x400.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/08/Wurlitzer-106-Front-Orange-1024x768.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2013/01/WILCO-White-Wurli-206-1024x768.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2016/11/IMG_4613-600x450.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2016/10/IMG_4192-600x450.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2016/08/IMG_1506-600x400.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/10/2014-01-27-15.47.50-800x600.jpg'
]

detail_photos = [
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/10/2014-01-27-15.48.17-800x600.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/10/2014-01-27-15.44.19-800x600.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/05/IMG_1275-600x450.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/09/IMG_1553-800x600.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2015/09/Piano-Bass-Closeup-600x438.jpg',
  'http://chicagoelectricpiano.com/wp-content/uploads/2016/04/IMG_2981-600x450.jpg'
]


4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 2
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 3
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 4
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 5
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 6
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 7
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 8
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 9
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 10
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 11
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 12
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 13
  )
end

4.times do
  Photo.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    url: detail_photos.sample,
    image_uid: "2017/03/10/3a2ihuq7l2_piano2.jpg",
    piano_id: 14
  )
end

8.times do
  Piano.create(
    make: 'Fender Rhodes',
    model: [ 'Mark I', 'Mark II', 'Mark III' ].sample,
    year: Faker::Number.between(1969, 1975),
    description: Faker::Lorem.sentence,
    photo: rhodes_main_photos.sample,
    price: [ 2000, 3000, 1500, 5000, 3500 ].sample
  )
end

10.times do
  Piano.create(
    make: 'Wurlitzer',
    model: [ 'Model 210', 'Model 206A', 'Model 106', 'Model 207' ].sample,
    year: Faker::Number.between(1965, 1975),
    description: Faker::Lorem.sentence,
    photo: wurly_main_photos.sample,
    price: [ 2000, 3000, 1500, 5000, 3500 ].sample
  )
end
