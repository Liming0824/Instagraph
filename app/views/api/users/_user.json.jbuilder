json.extract! user, :id, :username, :user_img_url, :bio
json.photo_image_url url_for(user.user_photo)


json.posts user.posts do |post|
  # json.partial! 'api/posts/post', post: post
  json.extract! post, :id, :image_url, :created_at
  json.photo_image_url url_for(post.photo)
  json.posterId post.user_id
  json.likes post.likes.map{|like| like.liker_id}
  # json.comments post.comments.map{|comment| comment.id}
  json.comments post.comments do |comment|
    json.extract! comment, :id, :body
    json.author_name comment.author.username
  end
end

json.followers user.followers.each do |follower|
  json.extract! follower, :id, :username, :bio
  json.photo_image_url url_for(follower.user_photo)
# json.followers user.followers.map{|user| user.id}
end

json.followings user.followings do |following|
  json.extract! following, :id, :username, :bio
  json.photo_image_url url_for(following.user_photo)
# json.followings user.followings.map{|user| user.id}
end



# partial shouldn't be over file, post partial couold just be using in post file,
# so inside this user partial, we can't use 'json.partial! 'api/posts/post` post: post'
# instead line 6-9
