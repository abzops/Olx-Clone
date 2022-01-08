import React, { useContext, useEffect, useState  } from "react";
import firebase from "firebase";
import {useNavigate} from "react-router-dom";

import "./Post.css";
import { PostContext } from "../../store/PostContext";

function Posts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setProducts(allPost);
      });
  }, []);

  const {setPostDetails} = useContext(PostContext)
  const navigate = useNavigate()

  return (
    <div class="main">
      <div class="_1yHmb _37idJ" data-aut-id="bundles_last_search">
        <div class="QFgwi">
          <span>More on Electronics &amp; Appliances</span>
          <button
            type="button"
            data-aut-id=""
            class="rui-39-wj rui-3-PNI rui-2K0j9"
          >
            <span>View more</span>
          </button>
        </div>
        <div class="rui-32FMc">
          <div class="rui-22qlo" role="button" tabindex="0">
            <span class="rui-OKqI7 rui-18xWg">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                class=""
                fill-rule="evenodd"
              >
                <path
                  class="rui-2ncPg"
                  d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z"
                ></path>
              </svg>
            </span>
          </div>
          <div class="rui-396LP">
            {products.map((product) => {
              return (
                <div  
                onClick={()=>{
                  setPostDetails(product)
                  navigate("/viewPost")

                }}
                  data-aut-id="itemBox"
                  data-aut-category-id="1505"
                  class="EIR5N _1_a8d"
                >
                  <a>
                    <figure class="_2grx4" data-aut-id="itemImage">
                      <img
                        src={product.url}
                        alt={product.brand}
                        sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 20vw, (min-width: 960px) 25vw, (min-width: 540px) 25vw, (min-width: 320px) 30vw, 35vw"
                        class="_3Kg_w"
                      />
                      <noscript></noscript>
                    </figure>
                    <div class="IKo3_">
                      <span class="_89yzn" data-aut-id="itemPrice">
                        ₹ {product.price}
                      </span>
                      <span class="_2tW1I" data-aut-id="itemTitle">
                        {product.title}
                      </span>
                      <div class="_1KOFM">
                        <span class="zLvFQ">
                          <span>{product.createdAt}</span>
                        </span>
                      </div>
                    </div>
                  </a>
                  <span class="_2LYp_">
                    <button
                      type="button"
                      class="rui-1rYgw"
                      role="button"
                      tabindex="0"
                      data-aut-id=""
                      title="Favourite"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 1024 1024"
                        data-aut-id="icon"
                        class=""
                        fill-rule="evenodd"
                      >
                        <path
                          class="rui-4K4Y7"
                          d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"
                        ></path>
                      </svg>
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
          <div class="rui-22qlo" role="button" tabindex="0">
            <span class="rui-OKqI7">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                class=""
                fill-rule="evenodd"
              >
                <path
                  class="rui-3KQ-t"
                  d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
