class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?
  
  def current_user
    return nil unless session[:session_token]
    @current_user ||= Member.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in

  end

  def login!(member)
    session[:session_token] = member.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end
end
