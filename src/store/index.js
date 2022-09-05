import {
  createStore
} from "vuex";
import axios from "axios";
import router from "@/router";
import swal from "sweetalert";

const artmart = "https://node-backend-capstone.herokuapp.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    cart: null,
    paintings: null,
    painting: null,
  },
  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user,
    getCart: (state) => state.cart,
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getPaintings: (state) => state.paintings,
    getPainting: (state) => state.painting,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },

    setUser(state, value) {
      state.user = value;
    },

    setCart(state, value) {
      state.cart = value;
    },

    setProducts(state, products) {
      state.products = products;
    },

    setSingleProduct(state, product) {
      state.product = product;
    },

    setPaintings(state, paintings) {
      state.paintings = paintings;
    },

    setSinglePainting(state, painting) {
      state.painting = painting;
    },
  },
  actions: {
    //*/********************//*PRODUCTS*//*****************************/*//

    //*GETTING ALL PRODUCTS *//

    async getProducts(context) {
      let res = await axios.get(artmart + "products");
      let {
        results
      } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      }
    },

    //*GETTING SINGLE PRODUCTS *//

    async getSingleProducts(context, id) {
      let res = await axios.get(artmart + "products/" + id);
      let {
        results
      } = await res.data;
      context.commit("setSingleProduct", results[0]);
    },

    //*ADD NEW PRODUCT*//

    addProducts: async (context, payload) => {
      const {
        title,
        price,
        category,
        description,
        img
      } = payload;

      try {
        await fetch(artmart + "products", {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              title: title,
              price: price,
              category: category,
              description: description,
              img: img,
            }),
          })
          .then((response) => response.json)
          .then((json) => context.commit("setProducts", json.data,
            swal({
              icon: "success",
              title: `Product Added Successfully`,
              buttons: false,
              timer: 2000,
            }), ));
        router.push({
          name: "adminproducts",
        });
      } catch (e) {
        console.log(e);
      }
    },

    //*DELETE A PRODUCT*//

    deleteProduct: async (context, id) => {
      fetch("https://node-backend-capstone.herokuapp.com/products/" + id, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then(() =>
          context.dispatch(
            "getProducts",
            swal({
              icon: "success",
              title: `Product has been deleted`,
              buttons: false,
              timer: 1000,
            })
          )
        );
    },

    //*EDIT PRODUCT*//

    async editProduct(context, id) {
      try {
        fetch("https://node-backend-capstone.herokuapp.com/products/" + id.id, {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(id),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            context.dispatch("getProducts");
          })
          .catch(console.log("error"));
      } catch (e) {
        console.log(e);
      }
    },

    //*/********************//*PAINTINGS*//*****************************/*//

    //*GETTING ALL PAINTINGS *//

    async getPaintings(context) {
      let res = await axios.get(artmart + "paintings");
      let {
        results
      } = await res.data;
      if (results) {
        context.commit("setPaintings", results);
      }
    },

    //*GETTING SINGLE PAINTINGS *//

    async getSinglePaintings(context, id) {
      let res = await axios.get(artmart + "paintings/" + id);
      let {
        results
      } = await res.data;
      context.commit("setSinglePainting", results[0]);
    },

    //*ADD NEW PAINTINGS*//

    addPainting: async (context, payload) => {
      const {
        title,
        price,
        category,
        description,
        size,
        img
      } = payload;

      try {
        await fetch(artmart + "paintings", {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              title: title,
              price: price,
              category: category,
              description: description,
              size: size,
              img: img,
            }),
          })
          .then((response) => response.json)
          .then((json) => context.commit("setPaintings", json.data,
          swal({
            icon: "success",
            title: `Painting Added Successfully`,
            buttons: false,
            timer: 2000,
          }),));
        router.push({
          name: "adminpaintings",
        });
      } catch (e) {
        console.log(e);
      }
    },

    //*EDIT PAINTINGS*//

    async editPainting(context, id) {
      try {
        fetch(
            "https://node-backend-capstone.herokuapp.com/paintings/" + id.id, {
              method: "PUT",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(id),
            }
          )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            context.dispatch("getPaintings");
          })
          .catch(console.log("error"));
      } catch (e) {
        console.log(e);
      }
    },
    //*DELETE A PAINTING*//

    deletePainting: async (context, id) => {
      fetch("https://node-backend-capstone.herokuapp.com/paintings/" + id, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then(() =>
          context.dispatch(
            "getPaintings",
            swal({
              icon: "success",
              title: `Painting has been deleted`,
              buttons: false,
              timer: 1000,
            })
          )
        );
    },

    //*/********************//*USERS*//*****************************/*//

    //*GETTING ALL USERS *//

    async getUsers(context) {
      let res = await axios.get(artmart + "users");
      let {
        results
      } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      }
    },

    //*GETTING SINGLE USERS *//

    async getUser(context, id) {
      let res = await axios.get(artmart + "users/" + id);
      let {
        results
      } = await res.data;
      if (results) {
        context.commit("setUser", results);
      }
    },

    //*DELETE A USER*//

    deleteUser: async (context, id) => {
      fetch("https://node-backend-capstone.herokuapp.com/users/" + id, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then(() =>
          context.dispatch(
            "getUsers",
            swal({
              icon: "success",
              title: `User has been deleted`,
              buttons: false,
              timer: 1000,
            })
          )
        );
    },

    // async deleteUser(context, id) {
    //   let res = await axios.delete(artmart + "users/" + id);
    //   let { results } = await res.data;
    //   context.commit("setUsers", results);
    // },

    //*UPDATE A NEW USER*//

    addUser: async (context, payload) => {
      const {
        firstName,
        lastName,
        email,
        phone,
        country,
        province,
        password,
        isAdmin
      } =
      payload;
      await fetch(artmart + "users/" + id, {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            country: country,
            province: province,
            password: password,
            isAdmin: isAdmin
          }),
        })
        .then((response) => response.json())
        .then((json) =>
          context.commit(
            "setUser",
            json,
            swal({
              icon: "success",
              title: `Success`,
              buttons: false,
              timer: 2000,
            }),
            router.push({
              name: "adminusers",
            })
          )
        );
    },

    //*EDIT USERS*//

    editUser(context, id) {
      fetch("https://node-backend-capstone.herokuapp.com/users/" + id.id, {
          method: "PUT",
          body: JSON.stringify(id),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((editUser) => editUser.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getUsers");
        });
    },
    //*/********************//*CART*//*****************************/*//

    //*GET CART ITEMS *//

    // async getCart(context, id) {
    //   let res = await axios.get(artmart + "users/" + id + "/cart");
    //   let { results } = await res.json(data);
    //   if (results) {
    //     context.commit("setCart", results);
    //   }else{
    //     console.log("Failed to get cart")
    //   }
    // },

    getCart: async (context) => {
      // fetch
      let res = await fetch(
        artmart + "users/" + context.state.user.id + "/cart"
      );
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit("setCart", result);
      } else {
        console.log("Failed to get cart");
      }
    },

    //*ADD CART ITEMS *//

    addCart: async (context, payload) => {
      const {
        id
      } = payload;

      try {
        await fetch(artmart + "users/" + id + "/cart", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            id: id,
          }),
        });
        context.dispatch("getCart", context.state.user.id);
      } catch (e) {
        console.log(e);
      }
    },

    //*DELETE ALL CART ITEMS *//

    //*DELETE ONE CART ITEM *//

    //*/********************//*VERIFICATION*//*****************************/*//

    //*REGISTER*//

    Registerform: async (context, payload) => {
      const {
        firstName,
        lastName,
        email,
        phone,
        country,
        province,
        password
      } =
      payload;
      await fetch(artmart + "register", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            country: country,
            province: province,
            password: password,
          }),
        })
        .then((response) => response.json())
        .then((json) =>
          context.commit(
            "setUsers",
            json,
            swal({
              icon: "success",
              title: `Welcome`,
              buttons: false,
              timer: 2000,
            }),
            router.push({
              name: "login",
            })
          )
        )
        .catch((e) =>
          context.commit(
            swal({
              icon: "success",
              title: `Registration Successfull`,
              buttons: false,
              timer: 2000,
            }),
            router.push({
              name: "login",
            })
          )
        );
    },

    //*LOGGING IN*//

    login(context, payload) {
      fetch(artmart + "login", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Login Failed.") {
            swal({
              icon: "error",
              title: `${data.msg}`,
              buttons: false,
              timer: 2000,
            });
          } else {
            context.commit("setUser", data.user[0]);
            console.log("sign in");
            swal({
              icon: "success",
              title: `Welcome`,
              buttons: false,
              timer: 2000,
            });
            context.dispatch("getCart", data.user[0].id);
            router.push({
              name: "home",
            });
          }
        });
    },
  },

  modules: {},
});