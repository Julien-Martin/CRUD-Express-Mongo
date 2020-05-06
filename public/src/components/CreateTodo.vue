<template>
    <div>
        <h2>Create a Todo List</h2>
        <form @submit.prevent>
            <div class="form-group">
                <input type="text" class="form-control" @keypress="typing=true" placeholder="Tâche" v-model="todo" @keyup.enter="addTodo($event)">
                <span class="help-block small text-center" v-show="typing">Appuyez sur Entrer pour enregistrer</span>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import handler from "../handler";
    export default {
        data() {
            return {
                todo: '',
                typing: false,
            }
        },
        methods: {
            addTodo(event){
                if(event) event.preventDefault();
                let url = 'http://localhost:3000/todo/create';
                let param = {
                    name: this.todo,
                    done: 0
                };
                axios.post(url, param).then((res) => {
                    console.log(res);
                    this.clearTodo();
                    this.refreshTodo();
                    this.typing = false;
                }).catch((error) => {
                    console.log(error);
                })
            },
            clearTodo(){
                this.todo = '';
            },
            refreshTodo(){
                handler.$emit("refreshTodo")
            }
        }
    }
</script>

<style scoped>

</style>