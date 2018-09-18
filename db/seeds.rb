# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Post.destroy_all


ApplicationRecord.connection.reset_pk_sequence!('posts')

post1 = Post.new({user_id: User.first.id, image_url: "fakeurl"})
# file1 = File.open("https://s3.amazonaws.com/file-upload-dev-aa-kang/instagraph/shanghai-slide.jpeg")
# post1.photo.attach(io: file1, filename: 'shanghai-slide.jpg')
post1.save!
post1.photo.attach(io: File.open("app/assets/images/China.jpg"), filename: "China.jpg")

post2 = Post.new({user_id: User.second.id, image_url: "fakeurl"})
# file2 = File.open("https://s3.amazonaws.com/file-upload-dev-aa-kang/instagraph/China.jpeg")
# post2.photo.attach(io: file2, filename: 'China.jpg')
post2.save!
post2.photo.attach(io: File.open("app/assets/images/shangai-slide.jpg"), filename: "shanghai-slide.jpg")

post3 = Post.new({user_id: User.third.id, image_url: "fakeurl"})
# file3 = File.open("https://s3.amazonaws.com/file-upload-dev-aa-kang/instagraph/shanghai.jpeg")
# post3.photo.attach(io: file3, filename: 'shanghai.jpg')
post3.save!
post3.photo.attach(io: File.open("app/assets/images/shanghai.jpg"), filename: "shanghai.jpg")

post4 = Post.new({user_id: User.last.id, image_url: "fakeurl"})
# file4 = File.open("https://s3.amazonaws.com/file-upload-dev-aa-kang/instagraph/timessquare3.jpg")
# post4.photo.attach(io: file4, filename: 'timessquare3.jpg')
post4.save!
post4.photo.attach(io: File.open("app/assets/images/timessquare3.jpg"), filename: "timessquare3.jpg")
