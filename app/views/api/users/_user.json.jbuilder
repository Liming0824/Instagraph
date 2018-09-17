json.extract! user, :id, :username, :user_img_url;
json.photo_image_url url_for(user.user_photo)
json.posts user.posts
