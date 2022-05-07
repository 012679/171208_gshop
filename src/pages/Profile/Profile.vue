<template>
  <section class="profile">
    <HeaderTop title="我的"></HeaderTop>
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-vip"></i>
        </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-fuwu"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
  </section>
</template>

<script>
import HeaderTop from "../../commponents/HeaderTop/HeaderTop.vue";
export default {
  components: {
    HeaderTop,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

* {
  margin: 0;
  padding: 0;
}

.profile { // 我的
  width: 100%;
  overflow: hidden;
}

.header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}

.header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;

  .icon-sousuo {
    font-size: 25px;
    color: #fff;
  }
}

.header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;

  .header_title_text {
    font-size: 20px;
    color: #fff;
    display: block;
  }
}

.header_login {
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  .header_login_text {
    color: #fff;
  }
}

.msite_nav {
  bottom-border-1px(#e4e4e4);
  margin-top: 45px;
  height: 200px;
  background: #fff;

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      width: 100%;
      height: 100%;

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;

        .link_to_food {
          width: 25%;

          .food_container {
            display: block;
            width: 100%;
            text-align: center;
            padding-bottom: 10px;
            font-size: 0;

            img {
              display: inline-block;
              width: 50px;
              height: 50px;
            }
          }

          span {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 13px;
            color: #666;
          }
        }
      }
    }

    .swiper-pagination {
      >span.swiper-pagination-bullet-active {
        background: #02a774;
      }
    }
  }
}

.msite_shop_list {
  top-border-1px(#e4e4e4);
  margin-top: 10px;
  background: #fff;

  .shop_header {
    padding: 10px 10px 0;

    .shop_icon {
      margin-left: 5px;
      color: #999;
    }

    .shop_header_title {
      color: #999;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .shop_container {
    margin-bottom: 50px;

    .shop_list {
      .shop_li {
        bottom-border-1px(#f1f1f1);
        width: 100%;

        >a {
          clearFix();
          display: block;
          box-sizing: border-box;
          padding: 15px 8px;
          width: 100%;

          .shop_left {
            float: left;
            box-sizing: border-box;
            width: 23%;
            height: 75px;
            padding-right: 10px;

            .shop_img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }

          .shop_right {
            float: right;
            width: 77%;

            .shop_detail_header {
              clearFix();
              width: 100%;

              .shop_title {
                float: left;
                width: 200px;
                color: #333;
                font-size: 16px;
                line-height: 16px;
                font-weight: 700;

                &::before {
                  content: '品牌';
                  display: inline-block;
                  font-size: 11px;
                  line-height: 11px;
                  color: #333;
                  background-color: #ffd930;
                  padding: 2px 2px;
                  border-radius: 2px;
                  margin-right: 5px;
                }
              }

              .shop_detail_ul {
                float: right;
                margin-top: 3px;

                .supports {
                  float: left;
                  font-size: 10px;
                  color: #999;
                  border: 1px solid #f1f1f1;
                  padding: 0 2px;
                  border-radius: 2px;
                }
              }
            }

            .shop_rating_order {
              clearFix();
              width: 100%;
              margin-top: 18px;
              margin-bottom: 8px;

              .shop_rating_order_left {
                float: left;
                color: #ff9a0d;

                .star { // 2x图 3x图
                  float: left;
                  font-size: 0;

                  .star-item {
                    display: inline-block;
                    background-repeat: no-repeat;
                  }

                  &.star-48 {
                    .star-item {
                      width: 20px;
                      height: 20px;
                      margin-right: 22px;
                      background-size: 20px 20px;

                      &:last-child {
                        margin-right: 0;
                      }

                      &.on {
                      }

                      &.half {
                      }

                      &.off {
                      }
                    }
                  }

                  &.star-36 {
                    .star-item {
                      width: 15px;
                      height: 15px;
                      margin-right: 6px;
                      background-size: 15px 15px;

                      &:last-child {
                        margin-right: 0;
                      }

                      &.on {
                      }

                      &.half {
                      }

                      &.off {
                      }
                    }
                  }

                  &.star-24 {
                    .star-item {
                      width: 10px;
                      height: 10px;
                      margin-right: 3px;
                      background-size: 10px 10px;

                      &:last-child {
                        margin-right: 0;
                      }

                      &.on {
                      }

                      &.half {
                      }

                      &.off {
                      }
                    }
                  }
                }

                .rating_section {
                  float: left;
                  font-size: 10px;
                  color: #ff6000;
                  margin-left: 4px;
                }

                .order_section {
                  float: left;
                  font-size: 10px;
                  color: #666;
                  transform: scale(0.8);
                }
              }

              .shop_rating_order_right {
                float: right;
                font-size: 0;

                .delivery_style {
                  transform-origin: 35px 0;
                  transform: scale(0.7);
                  display: inline-block;
                  font-size: 12px;
                  padding: 1px;
                  border-radius: 2px;
                }

                .delivery_left {
                  color: #fff;
                  margin-right: -10px;
                  background-color: #02a774;
                  border: 1px solid #02a774;
                }

                .delivery_right {
                  color: #02a774;
                  border: 1px solid #02a774;
                }
              }
            }
          }
        }
      }
    }
  }
}

.shop_distance {
  clearFix();
  width: 100%;
  font-size: 12px;

  .shop_delivery_msg {
    float: left;
    transform-origin: 0;
    transform: scale(0.9);
    color: #666;
  }
}

.segmentation {
  color: #ccc;
}

.profile-number {
  margin-top: 45.5px;

  .profile-link {
    clearFix();
    position: relative;
    display: block;
    background: #02a774;
    padding: 20px 10px;

    .profile_image {
      float: left;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      vertical-align: top;

      .icon-person {
        background: #e4e4e4;
        font-size: 62px;
      }
    }

    .user-info {
      float: left;
      margin-top: 8px;
      margin-left: 15px;

      p {
        font-weight: 700;
        font-size: 18px;
        color: #fff;

        &.user-info-top {
          padding-bottom: 8px;
        }

        .user-icon {
          display: inline-block;
          margin-left: -15px;
          margin-right: 5px;
          width: 20px;
          height: 20px;

          .icon-mobile {
            font-size: 30px;
            vertical-align: text-top;
          }
        }

        .icon-mobile-number {
          font-size: 14px;
          color: #fff;
        }
      }
    }

    .arrow {
      width: 12px;
      height: 12px;
      position: absolute;
      right: 15px;
      top: 40%;

      .icon-jiantou1 {
        color: #fff;
        font-size: 5px;
      }
    }
  }
}

.profile_info_data {
  bottom-border-1px(#e4e4e4);
  width: 100%;
  background: #fff;
  overflow: hidden;

  .info_data_list {
    clearFix();

    .info_data_link {
      float: left;
      width: 33%;
      text-align: center;
      border-right: 1px solid #f1f1f1;
      text-decoration: none;

      .info_data_top {
        display: block;
        width: 100%;
        font-size: 14px;
        color: #333;
        padding: 15px 5px 10px;

        span {
          display: inline-block;
          font-size: 30px;
          color: #f90;
          font-weight: 700;
          line-height: 30px;
        }
      }

      .info_data_bottom {
        display: inline-block;
        font-size: 14px;
        color: #666;
        font-weight: 400;
        padding-bottom: 10px;
      }
    }

    .info_data_link:nth-of-type(2) {
      .info_data_top {
        span {
          color: #ff5f3e;
        }
      }
    }

    .info_data_link:nth-of-type(3) {
      border: 0;

      .info_data_top {
        span {
          color: #6ac20b;
        }
      }
    }
  }
}

.profile_my_order {
  top-border-1px(#e4e4e4);
  margin-top: 10px;
  background: #fff;

  .my_order {
    display: flex;
    align-items: center;
    padding-left: 15px;
    text-decoration: none;

    >span {
      display: flex;
      align-items: center;
      width: 20px;
      height: 20px;

      >.iconfont {
        margin-left: -10px;
        font-size: 30px;
      }

      .icon-order-s {
        color: #02a774;
      }

      .icon-jifen {
        color: #ff5f3e;
      }

      .icon-vip {
        color: #f90;
      }

      .icon-fuwu {
        color: #02a774;
      }
    }

    .my_order_div {
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
      padding: 18px 10px 18px 0;
      font-size: 16px;
      color: #333;
      display: flex;
      justify-content: space-between;

      span {
        display: block;
      }

      .my_order_icon {
        width: 10px;
        height: 10px;

        .icon-jiantou1 {
          color: #bbb;
          font-size: 10px;
        }
      }
    }
  }
}
</style>