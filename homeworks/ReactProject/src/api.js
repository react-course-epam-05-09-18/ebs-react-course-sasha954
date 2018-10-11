import axios from 'axios';

export const api = {
  user: {
    login: credentials => {
      const data = JSON.stringify(credentials);
      return axios.post('http://localhost:8081/api/users/auth', data, { headers:{ 'Content-Type':'application/json' }}).then(res => {
        console.log(res);
        return res.data.data;
      });
    }
  },
  courses: {
    fetchAll: () => axios.get('http://10.23.12.216:8081/api/courses').then(res => res.data),
    createCourse: (data) => {
      const courseData = JSON.stringify(data);
      return axios.post('http://10.23.12.216:8081/api/courses', courseData, { headers: { 'Content-Type':'application/json' } }).then(res => res.data.data);
    }
  },
  authors: {
    fetchAll: () => axios.get('http://10.23.12.216:8081/api/authors/').then(res => res.data)
  }
};