Piano.create(
  make: 'Fender Rhodes',
  model: 'Mark I',
  year: '1973',
  description: 'This Fender Rhodes is from 1973, right in the heart of the early Fender Rhodes production period. We restored the piano with our “Rebirth” level of restoration services, virtually rebuilding the piano from scratch. Throughout the process we leveled the key bed and set the proper black key height, replaced all action felts and aging rubber components such as the grommets and hammer tips. Our goal was to keep the sound of the Rhodes as true to the sound of the 1973 production period by using only period-correct vintage parts and top quality reproduction parts that bring out the early Rhodes’ signature sound.',
  photo: 'http://chicagoelectricpiano.com/wp-content/uploads/2017/02/IMG_4876-800x600.jpg',
  price: 4000
    )

9.times do
  Piano.create(
    make: 'Fender Rhodes',
    model: [ 'Mark I', 'Mark II', 'Mark III' ].sample,
    year: Faker::Number.between(1969, 1975),
    description: Faker::Lorem.sentence,
    photo: 'http://chicagoelectricpiano.com/wp-content/uploads/2017/02/IMG_4570-600x450.jpg',
    price: [ 2000, 3000, 1500, 5000, 3500 ].sample
  )
end

10.times do
  Piano.create(
    make: 'Wurlitzer',
    model: [ 'Model 210', 'Model 206A', 'Model 106', 'Model 207' ].sample,
    year: Faker::Number.between(1965, 1975),
    description: Faker::Lorem.sentence,
    photo: 'http://chicagoelectricpiano.com/wp-content/uploads/2016/10/IMG_4192-600x450.jpg',
    price: [ 2000, 3000, 1500, 5000, 3500 ].sample
  )
end

Photo.create(
  name: 'side view',
  description: 'detailed view capturing the side angle',
  url: 'http://chicagoelectricpiano.com/wp-content/uploads/2017/02/IMG_4888-800x600.jpg',
  piano_id: 1
  )