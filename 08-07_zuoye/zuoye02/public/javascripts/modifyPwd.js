/**
 * Created by dllo on 17/8/7.
 */
var pwd = document.getElementById('passWord');
var pwd1 = document.getElementById('passWord1');
var oForm = document.getElementById('theForm');
oForm.onsubmit = function () {
    if (pwd.value !== pwd1.value) {
        alert('确认密码不同,请重新填写');
        return false;
    }
};