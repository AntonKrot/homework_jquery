
///////////////////////////////////////////////////////////////////

var a = $("#name").val("sdsds");
console.log(a);


//
//
//
// var usersTable = document.getElementById("users-table");
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "/user");
//
//
// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState !== 4) {
//         return;
//     }
//
//     var pars = JSON.parse(this.responseText);
//
//     for (var i = 0; i < pars.length; i++) {
//         var newTr = document.createElement("tr");
//         newTr.setAttribute("id", pars[i].id);
//         usersTable.appendChild(newTr);
//
//         var tdFullname = document.createElement("td");
//         tdFullname.innerText = pars[i].fullName;
//         newTr.appendChild(tdFullname);
//
//
//         var tdProfession = document.createElement("td");
//         tdProfession.innerText = pars[i].profession;
//         newTr.appendChild(tdProfession);
//
//         var tdShortinfo = document.createElement("td");
//         tdShortinfo.innerText = pars[i].shortInfo;
//         newTr.appendChild(tdShortinfo);
//
//         var newTd = document.createElement("td");
//         newTr.appendChild(newTd);
//
//         var btnRemove = document.createElement("button");
//         btnRemove.setAttribute("id", pars[i].id);
//         btnRemove.style.backgroundColor = "#E75454";
//         btnRemove.style.border = "0";
//         newTd.appendChild(btnRemove);
//         var textRemove = document.createTextNode("Remove");
//         btnRemove.appendChild(textRemove);
//
//         var btnEdit = document.createElement("button");
//         btnEdit.setAttribute("id", pars[i].id);
//         newTd.appendChild(btnEdit);
//         btnEdit.style.backgroundColor = "#41BEA8";
//         btnEdit.style.border = "0";
//         var textEdit = document.createTextNode("Edit");
//         btnEdit.appendChild(textEdit);
//         removeRow(btnRemove, i, pars);
//         editRow(btnEdit, i, pars);
//         change (btnEdit);
//     }
// });
//
// xhr.send();
//
// function removeRow(btn, index, elements) {
//     btn.addEventListener("click", function (e) {
//         var remove = new XMLHttpRequest();
//         remove.open("DELETE", "/user?id=" + elements[index].id);
//         remove.addEventListener("readystatechange", function () {
//             if (remove.readyState !== 4) {
//                 return;
//             }
//             var newTr = e.target.parentNode.parentNode;
//             var parent = newTr.parentNode;
//             parent.removeChild(newTr);
//         });
//
//         remove.send();
//     });
// }
// // ------------ add countries --------------------- //
//
// var countries = new XMLHttpRequest();
// countries.open("GET", "/countries");
// countries.addEventListener("readystatechange", function () {
//     if (this.readyState !== 4) {
//         return;
//     }
//
//     var counPars = JSON.parse(this.responseText);
//     for (var i = 0; i < counPars.length; i++) {
//         var option = document.createElement("option");
//         option.innerText = counPars[i];
//         country.appendChild(option);
//     }
//
// });
// countries.send();
//
// // ------------------- show form, clear input ----------------------- //
//
//
// var fullName = document.getElementById("fullname"),
//     birthday = document.getElementById("birthday"),
//     profession = document.getElementById("profession"),
//     address = document.getElementById("address"),
//     shortInfo = document.getElementById("short-info"),
//     fullInfo = document.getElementById("full-info"),
//     btnSave = document.querySelector(".btn-save"),
//     country = document.getElementById("country"),
//     create = document.getElementById("create"),
//     cancel = document.getElementById("cancel"),
//     form = document.querySelector(".users-edit");
//
//
// create.addEventListener("click", function () {
//     form.classList.remove("users-edit-hidden");
//     fullName.value = " ";
//     birthday.value = " ";
//     profession.value = " ";
//     address.value = " ";
//     shortInfo.value = " ";
//     fullInfo.value = " ";
// });
//
// cancel.addEventListener("click", function () {
//     form.classList.add("users-edit-hidden");
//
// });
//
//
// //--------------------- edit USER ----------------------------------
//
// function editRow(btnEdit, ind, el) {
//     btnEdit.addEventListener("click", function (e) {
//         form.classList.remove("users-edit-hidden");
//         var edit = new XMLHttpRequest();
//         edit.open("GET", "/user?id=" + el[ind].id);
//         edit.addEventListener("readystatechange", function () {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             var editPars = JSON.parse(this.responseText);
//
//             form.id.value = editPars.id;
//             form.fullname.value = editPars.fullName;
//             form.birthday.value = editPars.birthday;
//             form.profession.value = editPars.profession;
//             form.address.value = editPars.address;
//             form.country.value = editPars.country;
//             form["short-info"].value = editPars.shortInfo;
//             form["full-info"].value = editPars.fullInfo;
//         });
//
//         edit.send();
//     });
// }
//
// // ------------------- save new user ----------------------- //
//
// function change (btnEdit) {
//
//     form.addEventListener("submit", function (e) {
//         e.preventDefault();
//         if (form.id.value) {
//
//             var change = new XMLHttpRequest();
//             change.open("PUT", "/user");
//             change.setRequestHeader('Content-Type', 'application/json');
//             var changeInfo = {
//                 id: form.id.value,
//                 fullName: form.fullname.value,
//                 birthday: form.birthday.value,
//                 profession: form.profession.value,
//                 address: form.address.value,
//                 country: form.country.value,
//                 shortInfo: form["short-info"].value,
//                 fullInfo: form["full-info"].value
//             };
//             var strChange = JSON.stringify(changeInfo);
//             change.send(strChange);
//
//             change.addEventListener("readystatechange", function () {
//                 if (this.readyState !== 4) {
//                     return;
//                 }
//                 var changePars = JSON.parse(this.responseText);
//                 var parent = btnEdit.parentElement.parentElement;
//                 parent.children[0] = changePars.fullName;
//                 parent.children[1] = changePars.birthday;
//                 parent.children[2] = changePars.shortInfo;
//
//                 cancel.addEventListener("click", function () {
//                     form.classList.add("users-edit-hidden");
//
//                 });
//             });
//
//         } else {
//
//             var save = new XMLHttpRequest();
//             save.open("POST", "/user");
//             save.setRequestHeader('Content-Type', 'application/json');
//             save.addEventListener("readystatechange", function () {
//                 if (this.readyState !== 4) {
//                     return;
//                 }
//
//                 var user = JSON.parse(this.responseText);
//                 var newTr = document.createElement("tr");
//                 newTr.setAttribute("id", user.id);
//                 usersTable.appendChild(newTr);
//
//                 var tdFullname = document.createElement("td");
//                 tdFullname.innerText = user.fullName;
//                 newTr.appendChild(tdFullname);
//
//                 var tdProfession = document.createElement("td");
//                 tdProfession.innerText = user.profession;
//                 newTr.appendChild(tdProfession);
//
//                 var tdShortinfo = document.createElement("td");
//                 tdShortinfo.innerText = user.shortInfo;
//                 newTr.appendChild(tdShortinfo);
//
//                 var newTd = document.createElement("td");
//                 newTr.appendChild(newTd);
//
//                 var btnRemove = document.createElement("button");
//                 btnRemove.setAttribute("id", user.id);
//                 btnRemove.style.backgroundColor = "#E75454";
//                 btnRemove.style.border = "0";
//                 newTd.appendChild(btnRemove);
//                 var textRemove = document.createTextNode("Remove");
//                 btnRemove.appendChild(textRemove);
//
//                 var btnEdit = document.createElement("button");
//                 btnEdit.setAttribute("id", user.id);
//                 newTd.appendChild(btnEdit);
//                 btnEdit.style.backgroundColor = "#41BEA8";
//                 btnEdit.style.border = "0";
//                 var textEdit = document.createTextNode("Edit");
//                 btnEdit.appendChild(textEdit);
//
//                 btnRemove.addEventListener("click", function (e) {
//                     var remove = new XMLHttpRequest();
//                     remove.open("DELETE", "/user?id=" + user.id);
//                     remove.addEventListener("readystatechange", function () {
//                         if (remove.readyState !== 4) {
//                             return;
//                         }
//                         var newTr = e.target.parentNode.parentNode;
//                         var parent = newTr.parentNode;
//                         parent.removeChild(newTr);
//
//                     });
//
//                     remove.send();
//                 });
//
//             });
//             var userInfo = {
//                 fullName: form.fullname.value,
//                 birthday: form.birthday.value,
//                 profession: form.profession.value,
//                 address: form.address.value,
//                 country: form.country.value,
//                 shortInfo: form["short-info"].value,
//                 fullInfo: form["full-info"].value
//             };
//             var str = JSON.stringify(userInfo);
//             save.send(str);
//
//         }
//     });
//
// }
