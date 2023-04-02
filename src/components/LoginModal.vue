<template>
  <transition name="modal" appear>
    <form @submit.prevent="submitForm" class="modal">
      <div data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom" data-aos-duration="250" class="modal__window">
        <span class="close_button" @click="close">
          <i class="fas fa-times"></i>
        </span>
        <span class="header_logo">
          <img src="@/assets/smoosly_mix_main_4x.png" alt="" />
        </span>
        <div class="input-group">
          <input type="email" class="form-input" placeholder="이메일 입력" v-model="email" />
        </div>
        <div class="input-group">
          <div class="pw-input">
            <input :type="passwordType" class="form-input" placeholder="비밀번호" autocomplete="on" v-model="password" />
            <i v-if="passwordType === 'text'" @click="isHidden" class="fas fa-eye"></i>
            <i v-if="passwordType === 'password'" @click="isHidden" class="fas fa-eye-slash"></i>
          </div>
        </div>
        <button v-bind:disabled="!isEmailValid || !password" type="submit" class="btn-primary btn-48">로그인하기</button>
        <p>{{ logMessage }}</p>
        <div class="login-others">
          <div class="signup-info">
            <span> <a @click="findPWModal"> 비밀번호 찾기 </a> </span>&nbsp;|&nbsp;
            <span>
              <a href="signup"> 회원가입 </a>
            </span>
          </div>
          <span class="sns-login-label hr-sect">SNS 간편 로그인</span>
          <div class="sns-login">
            <div class="sns-wrapper">
              <ul class="sns-list">
                <li class="sns-item">
                  <a href="https://smoosly.com/auth/kakao">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
                      <path fill="#FFE812" d="M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z" />
                      <path
                        d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"
                      />
                      <path
                        fill="#FFE812"
                        d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="sns-item">
                  <a href="https://smoosly.com/auth/naver">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
                      <image
                        id="image0"
                        width="48"
                        height="48"
                        x="0"
                        y="0"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABC1BMVEUAwwAAwwAAwwAAwwAA
                        wwAAwwAAwwAAwwAAwwAAwwAAwwAAwwAAwwAAwwAAwwAAwwAAwwAAwwAAwwADxAMFxAUBwwEExAR7
                        4Hu07bSx7bGn6qcvzi8AwgArzSuq66q17rX///+y7bIOxg4/0j/5/vn9/v1233Y+0j71/fXo+ui/
                        8L8WyBaG44YCwwLw+/BM1UzM88weyh6W5pY90T32/fZX11c70TvY9tj+//7U9dRn22fy/PJp3GnN
                        883a9tr4/fhD00NN1U1G00aM5IxG1EYZyRnE8cTr+ut84HwRxxG37rc20Dbj+ONs3Wz7/vv8/vxH
                        1EcLxguo66ir66up66mk6qQuzi4ozCie6J75lbftAAAAEnRSTlNg5edk1Nrq8enw0tha3/n44F8Z
                        Sm81AAAAAWJLR0Qgs2s9gAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+ULCAIoNTBTh4gA
                        AAENSURBVEjH7dZZU8IwFAXgoOCKFW9sQY0SEIsLdQVFUQEVXMEFt///SyQpDzBjpzlvfeC8ZM5M
                        vklebiaMxQjIxCSLI/uJEmwKA9NsBgOzYxBFwJdV+KDZzkj9B/B0ZqWf1TWhmljfUC2T5oHAyUqd
                        XF6DzYJuWScY5Hyw5WpQ3PZ5OJA7RYEBubsHAlnyQLB/IDAgD49AII+9EwyUK6emoHBWVcv5Rc0Q
                        lC+v9HpdNwT1RrM2dDcDcEO3GLgTrTZ2ghCNewwQPVRB8PgEAvH8ggGiTjcc+CP6+qbB+4cMG1Hu
                        9j77+fr2H4GfX9V6bvAjQLanM1ptCgbhGYOoAPjrMIeBeZZcsBaNY6WW/gDVdsHqNzHG1wAAACV0
                        RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMS0wOFQwMjo0MDo1MyswMDowMHOv9FMAAAAldEVYdGRhdGU6
                        bW9kaWZ5ADIwMjEtMTEtMDhUMDI6NDA6NTMrMDA6MDAC8kzvAAAAAElFTkSuQmCC"
                      />
                    </svg>
                  </a>
                </li>
                <li class="sns-item">
                  <a href="https://smoosly.com/auth/google">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
                      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
                      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
                      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
                      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__overlay" @click="close"></div>
    </form>
  </transition>
</template>

<script>
import axios from 'axios';
import { validateEmail } from '@/utils/validation';
import { saveAuthToCookie } from '@/utils/cookies';

export default {
  name: 'Login',
  data() {
    return {
      passwordType: 'password',
      email: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
  },
  methods: {
    findPWModal() {
      this.emitter.emit('findPWModal', true);
    },
    close() {
      this.emitter.emit('closeModal');
    },
    isHidden() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    async submitForm() {
      try {
        const userData = {
          EMAIL: this.email,
          PASSWORD: this.password,
        };
        const { data } = await axios.post('/users/login', userData);
        console.log(data);
        if (data.success) {
          // this.$store.state.mailCheck = true;
          this.$store.state.username = data.userData.username;
          this.$store.commit('setToken', data.userData.token);
          saveAuthToCookie(data.userData.token);
          this.$router.push('/');
          if (this.$store.state.token != '') {
            this.emitter.emit('showToast', '로그인 되었습니다.');
            this.emitter.emit('loginFetch');
            this.emitter.emit('loginModal', false);
            return;
          }
        }
        this.initForm();
        this.emitter.emit('showRedToast', '로그인에 실패하였습니다.');
      } catch (error) {
        console.log(error);
        this.emitter.emit('showRedToast', '로그인에 실패하였습니다.');
      } finally {
        this.initForm();
      }
    },

    initForm() {
      this.password = '';
    },
  },
};
</script>

<style lang="scss" scoped>
*:not(i):not(button):not(input[type='password']) {
  font-family: $font-main, sans-serif !important;
}

.modal {
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .close_button {
    display: flex;
    position: relative;

    i {
      position: absolute;
      right: 0;
      padding: 0;
      font-size: 24px;
      color: $primary;

      &:hover {
        color: $blue;
      }
    }
  }

  .header_logo {
    display: flex;
    align-items: center;
    padding: 4px;
    /* margin: 12px 0 24px; */

    img {
      margin: auto;
      width: 70px;
    }
  }
  .input-group {
    margin: 16px 0;
  }

  .pw-input {
    position: relative;
    /* align-items: center;
    justify-content: center; */
    i {
      cursor: pointer;
      position: absolute;
      @include pos-center-y;
      margin-left: auto;
      left: 87%;
      font-size: 18px;
      color: $secondary;
    }
  }

  button {
    display: flex;
    width: 300px;
    margin: auto;
    @media screen and (max-width: 320px) {
      width: 240px;
    }
  }
  .login-others {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .signup-info,
  .sns-login {
    @include text-style(14, $primary);

    padding: 8px;
    margin-bottom: 8px;
    display: flex;
    margin: auto;
  }

  .signup-info {
    a {
      &:hover {
        color: $tertiary;
      }
    }
  }

  .sns-login-label {
    @include text-style(12, $secondary);
  }

  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    font-size: 12px;
    margin: 8px 0px;
  }

  .hr-sect::before,
  .hr-sect::after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }

  .sns-login {
    .sns-list {
      margin-bottom: 8px;
      padding: 0;
      display: flex;
      .sns-item {
        position: relative;
        margin-left: 16px;

        img {
          width: 48px;
          height: 48px;
        }

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: black;
    opacity: 0.5;
  }

  &__window {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: block;
    overflow: hidden;
    width: 22rem;
    height: 26rem;

    @media screen and (max-width: 320px) {
      width: 18rem;
    }

    border-radius: 0.4rem;
    overflow: hidden;
    padding: 24px;
    z-index: 1;
    box-shadow: 0px 4px 20px 0px $secondary;
    background-color: white;
  }

  // 상황에 따라 transition 변경가능 enter,leave class는 상단 문서 참고
  &-enter,
  &-leave-to {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &-enter-to,
  &-leave {
    transition: opacity 0.4s ease;
  }
}
</style>
