# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Like.destroy_all
Comment.destroy_all


user1 = User.new({username: 'liming.k', password: '123456'})
user1.save!
user1.user_photo.attach(io: File.open('app/assets/images/default_user_img.png'), filename: 'default_user_img.png')

user2 = User.new({username: 'visitor', password: '123456'})
user2.save!
user2.user_photo.attach(io: File.open('app/assets/images/default_user_img.png'), filename: 'default_user_img.png')

user3 = User.new({username: 'Brian', password: '123456'})
user3.save!
user3.user_photo.attach(io: File.open('app/assets/images/user_photoimg/71b67e5a8f815e55bcc18ba32afaad1d.jpg'), filename: '71b67e5a8f815e55bcc18ba32afaad1d.jpg')

user4 = User.new({username: 'Bob.Notsure', password: '123456'})
user4.save!
user4.user_photo.attach(io: File.open('app/assets/images/user_photoimg/25828793907_a6e9fb2d3f_c.jpg'), filename: '25828793907_a6e9fb2d3f_c.jpg')

user5 = User.new({username: 'Andre.C', password: '123456'})
user5.save!
user5.user_photo.attach(io: File.open('app/assets/images/user_photoimg/Bucky-will-be-this-famous-Black-Panther-character-922103.jpg'), filename: 'Bucky-will-be-this-famous-Black-Panther-character-922103.jpg')

user6 = User.new({username: 'Andrew.L', password: '123456'})
user6.save!
user6.user_photo.attach(io: File.open('app/assets/images/user_photoimg/El_Huason_01 copia.jpg'), filename: 'El_Huason_01 copia.jpg')

user7 = User.new({username: 'Claire.k', password: '123456'})
user7.save!
user7.user_photo.attach(io: File.open('app/assets/images/user_photoimg/f4263fd605414d9f433986d054287fb7--batman-family-dc-heroes.jpg'), filename: 'f4263fd605414d9f433986d054287fb7--batman-family-dc-heroes.jpg')

user8 = User.new({username: 'Howie.C', password: '123456'})
user8.save!
user8.user_photo.attach(io: File.open('app/assets/images/user_photoimg/71b67e5a8f815e55bcc18ba32afaad1d.jpg'), filename: '71b67e5a8f815e55bcc18ba32afaad1d.jpg')

user9 = User.new({username: 'Kevin.C', password: '123456'})
user9.save!
user9.user_photo.attach(io: File.open('app/assets/images/user_photoimg/25828793907_a6e9fb2d3f_c.jpg'), filename: '25828793907_a6e9fb2d3f_c.jpg')

user10 = User.new({username: 'Jonathan.A', password: '123456'})
user10.save!
user10.user_photo.attach(io: File.open('app/assets/images/user_photoimg/Bucky-will-be-this-famous-Black-Panther-character-922103.jpg'), filename: 'Bucky-will-be-this-famous-Black-Panther-character-922103.jpg')


ApplicationRecord.connection.reset_pk_sequence!('posts')

post1 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post1.save!
post1.photo.attach(io: File.open("app/assets/images/China.jpg"), filename: "China.jpg")

post2 = Post.new({user_id: user1.id, image_url: "fakeurl"})
post2.save!
post2.photo.attach(io: File.open("app/assets/images/shangai-slide.jpg"), filename: "shanghai-slide.jpg")

post3 = Post.new({user_id: user3.id, image_url: "fakeurl"})
post3.save!
post3.photo.attach(io: File.open("app/assets/images/shanghai.jpg"), filename: "shanghai.jpg")

post4 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post4.save!
post4.photo.attach(io: File.open("app/assets/images/timessquare3.jpg"), filename: "timessquare3.jpg")

post5 = Post.new({user_id: user4.id, image_url: "fakeurl"})
post5.save!
post5.photo.attach(io: File.open("app/assets/images/post_img/7jmp73elb0qz.jpg"), filename: "7jmp73elb0qz.jpg")

post6 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post6.save!
post6.photo.attach(io: File.open("app/assets/images/post_img/175312291-1.jpg"), filename: "175312291-1.jpg")

post7 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post7.save!
post7.photo.attach(io: File.open("app/assets/images/post_img/199819296.jpg"), filename: "199819296.jpg")

post8 = Post.new({user_id: user8.id, image_url: "fakeurl"})
post8.save!
post8.photo.attach(io: File.open("app/assets/images/post_img/2120716991.jpg"), filename: "2120716991.jpg")

post9 = Post.new({user_id: user5.id, image_url: "fakeurl"})
post9.save!
post9.photo.attach(io: File.open("app/assets/images/post_img/25688225598_f996e79833_b.jpg"), filename: "25688225598_f996e79833_b.jpg")

post10 = Post.new({user_id: user7.id, image_url: "fakeurl"})
post10.save!
post10.photo.attach(io: File.open("app/assets/images/post_img/charlie120bw.jpg"), filename: "charlie120bw.jpg")

post11 = Post.new({user_id: user1.id, image_url: "fakeurl"})
post11.save!
post11.photo.attach(io: File.open("app/assets/images/post_img/drone-photo-china-cocoanext.jpg"), filename: "drone-photo-china-cocoanext.jpg")

post12 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post12.save!
post12.photo.attach(io: File.open("app/assets/images/post_img/DWj6T12V4AAc2jp.jpg"), filename: "DWj6T12V4AAc2jp.jpg")

post13 = Post.new({user_id: user6.id, image_url: "fakeurl"})
post13.save!
post13.photo.attach(io: File.open("app/assets/images/post_img/DWuvFrRXcAAYOWQ.jpg"), filename: "DWuvFrRXcAAYOWQ.jpg")

post14 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post14.save!
post14.photo.attach(io: File.open("app/assets/images/post_img/gwigwi_5-rekomendasi-tempat-terkeren-di-kyoto-3.jpg"), filename: "gwigwi_5-rekomendasi-tempat-terkeren-di-kyoto-3.jpg")

post15 = Post.new({user_id: user5.id, image_url: "fakeurl"})
post15.save!
post15.photo.attach(io: File.open("app/assets/images/post_img/Harbin_Opera_House_by_Iwan_Baan04.jpg"), filename: "Harbin_Opera_House_by_Iwan_Baan04.jpg")

post16 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post16.save!
post16.photo.attach(io: File.open("app/assets/images/post_img/hiro-goto-japan-photography-4.jpg"), filename: "hiro-goto-japan-photography-4.jpg")

post17 = Post.new({user_id: user1.id, image_url: "fakeurl"})
post17.save!
post17.photo.attach(io: File.open("app/assets/images/post_img/image_562206151026219611151.jpg"), filename: "image_562206151026219611151.jpg")

post18 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post18.save!
post18.photo.attach(io: File.open("app/assets/images/post_img/IMG_0773.JPG"), filename: "IMG_0773.JPG")

post19 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post19.save!
post19.photo.attach(io: File.open("app/assets/images/post_img/japan-photography-daniel-bilsborough-008.jpg"), filename: "japan-photography-daniel-bilsborough-008.jpg")

post20 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post20.save!
post20.photo.attach(io: File.open("app/assets/images/post_img/japan-photography-yoshii-6.jpg"), filename: "japan-photography-yoshii-6.jpg")

post21 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post21.save!
post21.photo.attach(io: File.open("app/assets/images/post_img/LHfjRs7.jpg"), filename: "LHfjRs7.jpg")

post22 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post22.save!
post22.photo.attach(io: File.open("app/assets/images/post_img/MBP_Hokkaido_20170204_5D11482.jpg"), filename: "MBP_Hokkaido_20170204_5D11482.jpg")

post23 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post23.save!
post23.photo.attach(io: File.open("app/assets/images/post_img/natures-best-photography-asia-2017-03.jpg"), filename: "natures-best-photography-asia-2017-03.jpg")

post24 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post24.save!
post24.photo.attach(io: File.open("app/assets/images/post_img/ON-A_urska-boljkovac-6.jpg"), filename: "ON-A_urska-boljkovac-6.jpg")

post25 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post25.save!
post25.photo.attach(io: File.open("app/assets/images/post_img/p224_d20151209102012_800.jpg"), filename: "p224_d20151209102012_800.jpg")

post26 = Post.new({user_id: user2.id, image_url: "fakeurl"})
post26.save!
post26.photo.attach(io: File.open("app/assets/images/post_img/p955_d20151209110657_800.jpg"), filename: "p955_d20151209110657_800.jpg")

post27 = Post.new({user_id: user1.id, image_url: "fakeurl"})
post27.save!
post27.photo.attach(io: File.open("app/assets/images/post_img/Temple-Of-Heaven-In-Beijing-Picture.jpg"), filename: "Temple-Of-Heaven-In-Beijing-Picture.jpg")


like1 = Like.create({post_id: post1.id, liker_id: user1.id})
like2 = Like.create({post_id: post1.id, liker_id: user2.id})
like3 = Like.create({post_id: post1.id, liker_id: user3.id})
like4 = Like.create({post_id: post4.id, liker_id: user4.id})
like5 = Like.create({post_id: post3.id, liker_id: user5.id})
like6 = Like.create({post_id: post20.id, liker_id: user6.id})
like7 = Like.create({post_id: post10.id, liker_id: user7.id})
like8 = Like.create({post_id: post15.id, liker_id: user8.id})
like9 = Like.create({post_id: post2.id, liker_id: user9.id})
like9 = Like.create({post_id: post2.id, liker_id: user10.id})
like9 = Like.create({post_id: post3.id, liker_id: user1.id})
like9 = Like.create({post_id: post3.id, liker_id: user2.id})
like9 = Like.create({post_id: post4.id, liker_id: user3.id})
like9 = Like.create({post_id: post5.id, liker_id: user4.id})


comment1 = Comment.create({post_id: post1.id, author_id: user2.id,body: "this is a successful test!"})
comment2 = Comment.create({post_id: post2.id, author_id: user3.id,body: "this is a nice picture!"})
comment3 = Comment.create({post_id: post1.id, author_id: user5.id,body: "i like this post"})
comment4 = Comment.create({post_id: post4.id, author_id: user7.id,body: "nice!"})
comment5 = Comment.create({post_id: post2.id, author_id: user3.id,body: "great pic!!"})
comment6 = Comment.create({post_id: post5.id, author_id: user2.id,body: "looks nice!"})
comment7 = Comment.create({post_id: post1.id, author_id: user2.id,body: "another successful test!"})
