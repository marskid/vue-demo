<template>
    <div id="systemConfiguration">
        <section class="pure-g">
            <div class="pure-u-1-1">
                <h3>System Configuration</h3>
            </div>
        </section>
        <section class="pure-g">
            <div class="pure-u-1-1">
                <form class="pure-form pure-form-aligned">
                    <fieldset>
                        <div class="pure-control-group">
                            <label for="name">Username</label>
                            <input id="name" type="text" placeholder="Username" v-model="username">
                            <span class="pure-form-message-inline">Required</span>
                        </div>

                        <div class="pure-control-group">
                            <label for="password">Password</label>
                            <input id="password" type="password" placeholder="Password" v-model="password">
                        </div>

                        <div class="pure-control-group">
                            <label for="email">Email Address</label>
                            <input id="email" type="email" placeholder="Email Address" v-model="emailAddress">
                        </div>

                        <div class="pure-control-group">
                            <label for="foo">Home Address</label>
                            <input id="foo" type="text" placeholder="Home Address" v-model="homeAddress">
                        </div>

                        <div class="pure-controls">
                            <label for="cb" class="pure-checkbox">
                                <input id="cb" type="checkbox" v-model="termAndConditions"> I've read the terms and conditions
                            </label>

                            <button type="button" class="pure-button pure-button-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'SystemConfiguration',
    data() {
        return {
            username: "Melvin Wang",
            password: "12345678",
            emailAddress: "melvinwang@example.com",
            homeAddress: "137 W San Bernardino Rd.",
            termAndConditions: false
        }
    }
}
</script>

<style lang="stylus" scoped>
#systemConfiguration
  width 100%
  max-width 1500px
  height calc( 100% - 40px )

  >section
    padding 0 30px 30px 30px
</style>

