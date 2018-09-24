json.extract! user, :id, :username, :user_img_url, :bio
json.photo_image_url url_for(user.user_photo)
json.follower_records user.follower_records.each do |follow|
      json.extract! follow, :noticed, :follower_id
  # json.follower follow.follower
  # json.follower_image_url url_for(follow.follower.user_photo)
end


json.posts user.posts.each do |post|
  json.extract! post, :id, :image_url, :created_at
  json.photo_image_url url_for(post.photo)
  json.posterId post.user_id
  json.likes post.likes.map{|like| like.liker_id}
  json.comments post.comments do |comment|
    json.extract! comment, :id, :body, :post_id, :author_id
    json.author_name comment.author.username
    json.post_author_id comment.post_author.id
  end
end


json.followers user.followers.each do |follower|
  json.extract! follower, :id, :username, :bio
  json.photo_image_url url_for(follower.user_photo)
end

json.followings user.followings.each do |following|
  json.extract! following, :id, :username, :bio
  json.photo_image_url url_for(following.user_photo)
end




# partial can't be over file, post partial couold just be using in post file,
# so inside this user partial, we can't use 'json.partial! 'api/posts/post` post: post'
# instead line 6-9
