
///////////////////////////////////////////////////////////////////


$.getJSON("/user", function(data){

   for (var i = 0; i < data.length; i++) {

       var $newTr = $("<tr></tr>").attr("id", data[i].id);
        $("#users-table").append($newTr);

        var $tdFullname = $("<td></td>").text(data[i].fullName);
        $newTr.append($tdFullname);

        var $tdProfession = $("<td></td>").text(data[i].profession);
        $newTr.append($tdProfession);

        var $tdShortinfo = $("<td></td>").text(data[i].shortInfo);
        $newTr.append($tdShortinfo);

        var $newTd = $("<td></td>"),
            $btnRemove = $("<button>Remove</button>");
        $btnRemove.attr("id", data[i].id);
        $btnRemove.css({
           "background": "#E75454", "border": "0"
        });
        $newTd.append($btnRemove);

         var $btnEdit = $("<button>Edit</button>");
        $btnEdit.css({
            "background": "#41BEA8", "border": "0"
        });
        $btnEdit.attr("id", data[i].id);
        $newTd.append($btnEdit);
        $newTr.append($newTd);
        removeRow($btnRemove, i, data);
        editRow($btnEdit, i, data);
    }
});



function removeRow(btn, index, elements) {
    btn.click(function (e) {
        $.ajax({
            url: "/user?id=" + elements[index].id,
            type: "DELETE",
            success: function() {
            var newTr = e.target.parentNode.parentNode;
            var parent = newTr.parentNode;
            parent.removeChild(newTr);

            }
        });
    });
}

$("#create").click(function () {
    $(".users-edit").removeClass("users-edit-hidden");
    $("#fullname").value = " ";
    $("#birthday").value = " ";
    $("#profession").value = " ";
    $("#address").value = " ";
    $("#short-info").value = " ";
    $("#full-info").value = " ";
});

$("#cancel").click(function () {
    $(".users-edit").addClass("users-edit-hidden");
});

//----------------country ----------------------------

$.getJSON("/countries", function(data){
   for (var i = 0; i < data.length; i++) {
       var $option = $("<option></option>").text(data[i]);
       $("#country").append($option);
   }
});

function editRow(btnEdit, ind, el) {
    btnEdit.click(function () {
        $(".users-edit").removeClass("users-edit-hidden");
        $.getJSON("/user?id=" + el[ind].id, function(data){

           $("#id").val(data.id);
           $("#fullname").val(data.fullName);
           $("#birthday").val(data.birthday);
           $("#profession").val(data.profession);
           $("#address").val(data.address);
           $("#country").val(data.country);
           $("#short-info").val(data.shortInfo);
           $("#full-info").val(data.fullInfo);
        });

    });

}


$(".users-edit").submit(function (e) {
    e.preventDefault();
    if ($("#id").val()) {
        $.ajax({
            url: "/user",
            type: "PUT",
            contentType: 'application/json',
            dataType: 'json',
            success: function () {
                var changeInfo = {
                    id: $("#id").val(),
                    fullName: $("#fullname").val(),
                    birthday: $("#birthday").val(),
                    profession: $("#profession").val(),
                    address: $("#address").val(),
                    country: $("#country").val(),
                    shortInfo: $("#short-info").val(),
                    fullInfo: $("#full-info").val()
                };
                var str = $(".users-edit").serialize();

                $.getJSON("/user?id=" + el[ind].id, function (data) {
                    var parent = btnEdit.parentElement.parentElement;
                    parent.children[0] = data.fullName;
                    parent.children[1] = data.birthday;
                    parent.children[2] = data.shortInfo;
                    $(".users-edit").addClass("users-edit-hidden");
                });
            }


        });
    } else {
        $.ajax({
            url: "/user",
            type: "POST",
            contentType: 'application/json',
            dataType: 'json',
            success: function () {
                $.getJSON("/user", function (data) {

                    for (var i = 0; i < data.length; i++) {

                     var $newTr = $("<tr></tr>").attr("id", data[i].id);
                     $("#users-table").append($newTr);

                     var $tdFullname = $("<td></td>").text(data[i].fullName);
                     $newTr.append($tdFullname);

                     var $tdProfession = $("<td></td>").text(data[i].profession);
                     $newTr.append($tdProfession);

                     var $tdShortinfo = $("<td></td>").text(data[i].shortInfo);
                     $newTr.append($tdShortinfo);

                     var $newTd = $("<td></td>"),
                         $btnRemove = $("<button>Remove</button>");
                     $btnRemove.attr("id", data[i].id);
                     $btnRemove.css({
                         "background": "#E75454", "border": "0"
                     });
                     $newTd.append($btnRemove);

                     var $btnEdit = $("<button>Edit</button>");
                     $btnEdit.css({
                         "background": "#41BEA8", "border": "0"
                     });
                     $btnEdit.attr("id", data[i].id);
                     $newTd.append($btnEdit);
                     $newTr.append($newTd);
                     removeRow($btnRemove, i, data);
                     editRow($btnEdit, i, data);
                    }
                });
                function removeRow(btn, index, elements) {
                    btn.click(function (e) {
                        $.ajax({
                            url: "/user?id=" + elements[index].id,
                            type: "DELETE",
                            success: function () {
                             var newTr = e.target.parentNode.parentNode;
                             var parentTwo = newTr.parentNode;
                                parentTwo.removeChild(newTr);

                            }
                        });
                    });

                }

            }
        });
    }
    var userInfo = {
        id: $("#id").val(),
        fullName: $("#fullname").val(),
        birthday: $("#birthday").val(),
        profession: $("#profession").val(),
        address: $("#address").val(),
        country: $("#country").val(),
        shortInfo: $("#short-info").val(),
        fullInfo: $("#full-info").val()
    };
    var struser = $(".users-edit").serialize();
});



