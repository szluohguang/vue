
import axios from 'axios';      // 导入axios对象

export const getTodoList = params => { // 封装名为 getTodoList的函数
    return axios.get( '/todolist/gettodolist',  // 从路径中获取数据
    {
        params: params
    })
    .catch( function(error) {
        console.log( error);
    });

};

export const addTodo = params => {
    return axios.post('/todolist/addTodo',params)
    .then( res => res.data)
    .catch( function( error){
        console.log( error );
    });
}