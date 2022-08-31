import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import swal from "sweetalert";

const artmart = "https://node-backend-capstone.herokuapp.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    singleproduct: null,
    token: null,
    cart: null,
    paintings: null,
    singlepainting: null,
  },
  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user,
    getCart: (state) => state.cart,
    getProducts: (state) => state.products,
    getPaintings: (state) => state.paintings,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },

    setUser(state, values) {
      state.user = values;
    },

    setCart(state, values) {
      state.cart = values;
    },

    setProducts(state, products) {
      state.products = products;
    },

    setSingleProduct(state, singleproduct) {
      state.singleproduct = singleproduct;
    },

    setPaintings(state, paintings) {
      state.paintings = paintings;
    },

    setSinglePainting(state, singlepainting) {
      state.singlepainting = singlepainting;
    },
  },
  actions: {
    //*GETTING ALL PRODUCTS *//

    async getProducts(context) {
      let res = await axios.get(artmart + "products");
      let { results } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      }
    },

    //*GETTING SINGLE PRODUCTS *//
    async getSingleProducts(context, id) {
      let res = await axios.get(artmart + "products/" + id);
      let { results } = await res.data;
      context.commit("setSingleProduct", results[0]);
    },

    //*ADD NEW PRODUCT*//
    addProducts: async (context, payload) => {
      const { title, price, category, description, img } = payload;

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
          .then((json) => context.commit("setProducts", json.data));
        router.push({
          name: "admin",
        });
      } catch (e) {
        console.log(e);
      }
    },

    //*DELETE PRODUCT*//
    async deleteProduct(context, id) {
      let res = await axios.delete(artmart + "products/" + id);
      let { results } = await res.data;
      context.commit("setSingleProduct", results);
    },

    //*GETTING ALL PAINTINGS *//

    async getPaintings(context) {
      let res = await axios.get(artmart + "paintings");
      let { results } = await res.data;
      if (results) {
        context.commit("setPaintings", results);
      }
    },

    //*GETTING SINGLE PAINTINGS *//
    async getSinglePaintings(context, id) {
      let res = await axios.get(artmart + "paintings/" + id);
      let { results } = await res.data;
      context.commit("setSinglePainting", results[0]);
    },

    //*DELETE PAINTING*//
    async deletePainting(context, id) {
      let res = await axios.delete(artmart + "paintings/" + id);
      let { results } = await res.data;
      context.commit("setSinglePainting", results);
    },

    //*GETTING ALL USERS *//

    async getUsers(context) {
      let res = await axios.get(artmart + "users");
      let { results } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      }
    },

    //*DELETE A USER*//
    async deleteUser(context, id) {
      let res = await axios.delete(artmart + "users/" + id);
      let { results } = await res.data;
      context.commit("setUsers", results);
    },

    //*REGISTER*//
    Registerform: async (context, payload) => {
      const { firstName, lastName, email, phone, country, province, password } =
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
      // console.log(payload);
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
            context.commit("setUser", payload);
            console.log("sign in");
            swal({
              icon: "success",
              title: `Welcome`,
              buttons: false,
              timer: 2000,
            });
            router.push({
              name: "landing",
            });
          }
        });
    },

    // loginUser: async (context, payload) => {
    //   const {
    //     email,
    //     password
    //   } = payload;
    //   let result = await fetch(artmart + "login", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //   });
    //   if (result) {
    //     router.push({
    //       name: "landing",
    //     });
    //     alert("WELCOME");
    //   } else {
    //     console.log('error');
    //   }
    // },

    //   loginUser: async (context, payload) => {
    //   const {email,password} = payload;
    //   fetch(artmart + "login", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         email: email,
    //         password: password,
    //       }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         "x-auth-token": await context.state.token,
    //       },
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       alert(data.msg);
    //       let user = data.user;
    //       let token = data.token;
    //       let cart = data.user.cart;
    //       context.commit("setUsers", user);
    //       context.commit("setToken", token);
    //       context.commit("setcart", cart);
    //       // router.push({
    //       //   name: "products"
    //       // })
    //     });
    // },
  },

  modules: {},
});
