import {createStore} from "vuex";
import axios from "axios";
import router from "@/router";

const artmart = "https://node-backend-capstone.herokuapp.com/";

export default 
      createStore({
        state: {
        users: null,
        products: null,
        singleproduct: null,
        paintings: null,
        singlepainting: null,
      },

        getters: {
          getUsers: (state) => state.users,
          getProducts: (state) => state.products,
          getPaintings: (state) => state.paintings,
        },

        mutations: {
          setUsers(state, values) {
            state.users = values;
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
      let {results} = await res.data;
      if (results) {
          context.commit("setProducts", results);
        }
      },
      
    //*GETTING SINGLE PRODUCTS *//
        async getSingleProducts(context, id) { 
        let res = await axios.get(artmart + "products/" + id);
        let {results} = await res.data;
          context.commit("setSingleProduct", results[0]);
    },


    //*GETTING ALL PAINTINGS *//

    async getPaintings(context) {
      let res = await axios.get(artmart + "paintings");
      let {results} = await res.data;
      if (results) {
          context.commit("setPaintings", results);
        }
      },
      
    //*GETTING SINGLE PAINTINGS *//
        async getSinglePaintings(context, id) { 
        let res = await axios.get(artmart + "paintings/" + id);
        let {results} = await res.data;
          context.commit("setSinglePainting", results[0]);
    },
  },
      //*REGISTER*//
      register: async (context, payload) => {
        const {
          firstName,
          lastName,
          email,
          password,
          phone,
          province,
          country
          } = payload;
          await fetch(artmart + "register", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
                    },
                    body: JSON.stringify({
                      firstName: firstName,
                      lastName: lastName,
                      email: email,
                      password: password,
                      phone: phone,
                      province: province,
                      country: country,
                  }),
        })
          .then((response) => response.json())
          .then((json) => context.commit("setUser", json),
          router.push({
            name: "login",
          }),
          alert(`Your Registration was Successfull. Please login!`)
        );
    },

    //*LOGGING IN*//

    login: async (context, payload) => {
      const {email, password} = payload;
        let result = await fetch(artmart + "login", {
          method: "POST",
          headers: {"Content-type": "application/json; charset=UTF-8",},
            body: JSON.stringify({
            email: email,
            password: password,
            }),
      });
        if (result) {
          router.push({
          name: "landing",
          });
            alert("WELCOME");
          } else {
            this.errMsg = `error`;
        }
    },


  login: async (context, payload) => {
    const {email,password} = payload;
    fetch(artmart + "login", {
        method: "PATCH",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": await context.state.token,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        alert(data.msg);
        let user = data.user;
        let token = data.token;
        let cart = data.user.cart;
        context.commit("setuser", user);
        context.commit("setToken", token);
        context.commit("setcart", cart);
        // router.push({
        //   name: "products"
        // })
      });
  },
  modules: {},
});