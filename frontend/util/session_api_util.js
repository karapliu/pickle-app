export const signup = member => (
  $.ajax ({
    method: 'POST',
    url: '/api/members',
    data: { member }
  })
);

export const login = member => (
  $.ajax({
    method: 'POST',
      url: '/api/session',
      data: { member }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
      url: '/api/session'
  })
);