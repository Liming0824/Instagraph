module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    protected
    def find_verified_user
      if verified_user = User.find_by(session_token: cookies.encrypted["_instagraph_session"]["session_token"])
        verified_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
