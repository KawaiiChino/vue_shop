<template>
    <div class="login_container">
        <!-- 登录组件 -->
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
        </div>
    </div>

</template>
<script>
export default{}

</script>

<style lang="less" scoped>
    .login_container{
        background-color: rgb(0, 119, 119);
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top:50%;
        transform:translate(-50%,-50%);
        .avatar_box{
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform:translate(-50%,-50%);
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }
</style>