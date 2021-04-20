import http from './http-commons';

class StuffDataService {

  create(data) {
    return http.post("/api", data);
  }
  findAll() {
    return http.get("/");
  }

  findByPk(id) {
    return http.get(`/api/${id}`);
  }
  
  findOne(id) {
    return http.get(`/edit/${id}`);
  }

  postEdit(id, data) {
    return http.post(`/edit/${id}`, data);
  }

  destroy(id) {
    console.log(id)
    return http.post(`/api/${id}`);
  }

  deleteAll() {
    return http.delete(`/api`);
  }

  findByTitle(title) {
    return http.get(`/api?title=${title}`);
  }
}

export default new StuffDataService();