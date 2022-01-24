<template>
  <div class="page-login">
    <b-container>
      <div class="login-form col-xl-6 col-lg-6 mx-auto">
        <div class="login-form-content">
          <b-row>
            <b-col>
              <div class="login-form-content__logo"></div>

              <!-- Title -->
              <div class="login-form-content__header">
                <h1>{{ $t("LOGIN.TITLE") }}</h1>
              </div>

              <!-- Account -->
              <div class="login-form-content__body">
                <div class="item-input">
                  <b-input-group>
                    <b-input-group-append is-text>
                      <i class="far fa-envelope"></i>
                    </b-input-group-append>
                    <b-form-input
                      :placeholder="$t('LOGIN.PLACEHOLDER_ACCOUNT')"
                      spellcheck="false"
                      name="username"
                      autocomplete="off"
                      v-model="USER.email"
                    />
                  </b-input-group>
                </div>

                <div class="item-input">
                  <b-input-group>
                    <b-input-group-append is-text>
                      <i class="fas fa-lock"></i>
                    </b-input-group-append>
                    <b-form-input
                      :placeholder="$t('LOGIN.PLACEHOLDER_PASSWORD')"
                      spellcheck="false"
                      name="password"
                      type="password"
                      autocomplete="off"
                      v-model="USER.password"
                    />
                  </b-input-group>
                </div>
              </div>

              <div class="login-form-content__footer">
                <b-row>
                  <b-col>
                    <b-button @click="doLogin()" :disabled="isProcess">
                      <i
                        v-if="isProcess"
                        class="fad fa-spinner-third fa-spin"
                      ></i>
                      {{ $t("LOGIN.BUTTON_LOGIN") }}
                      <i class="fas fa-sign-in-alt"> </i>
                    </b-button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
// import { MakeToast } from "../../toast/MakeToast";
// import { validEmail, validPassword } from "../../utils/validation";
import { authentication } from "../../api/index";
export default {
  name: "Login",
  data() {
    return {
      USER: {
        email: "",
        password: "",
      },
      isProcess: false,
      err: "",
    };
  },
  methods: {
    async doLogin() {
      const DATA = {
        username: this.USER.email,
        password: this.USER.password,
      };
      await authentication(DATA);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/_variables";
@import "@/scss/modules/_login";
</style>
