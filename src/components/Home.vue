<template>
    <div>
        Home组件
        <el-button type="info" @click="logout">
            退出
        </el-button>
    </div>
</template>
<script>
export default {
    methods: {
        
        logout() {
            // 退出1清空token，2
            window.sessionStorage.clear()
            this.$router.push("/login");
            this.$message.success("退出成功");
        }
    }
}
</script>

<style lang="less" scoped>

</style>