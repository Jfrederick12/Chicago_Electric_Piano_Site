10.times do
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