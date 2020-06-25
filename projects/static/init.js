(function($){
    $(function(){

      $('.sidenav').sidenav();

    });

    $(document).ready(function(){
      $('.slider').slider();
    });

    $(document).ready(function (){


    $(".dropdown-trigger").dropdown();

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });


    // newproject JS

      //add-client-container
      //
      $("#add-client-btn").click(function (){
        $("#add-client-container").append(
          '<div class="input-field col s6">'+
            '<i class="material-icons prefix">account_circle</i>'+
            '<input id="icon_prefix" type="text" class="validate">'+
            '<label for="icon_prefix">Name</label>'+
          '</div>'+
          '<div class="input-field col s6">'+
            '<i class="material-icons prefix">email</i>'+
            '<input id="icon_email" type="tel" class="validate">'+
            '<label for="icon_email">Email</label>'+
          '</div>'
        );
      });

      $("#re-submit").click(function(){


          $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: '/getCalculatorData',
            dataType: 'json',
            data : values,
            async: true,
            cache: false,
            success: function (newMapData) {

              initData = newMapData;

              createProfileDropdowns(initData[0]);

              //Rebuild the map using the data provided.
              calcMapData = buildCalcViewData(newMapData, "commOnly");
              regionMapData = buildCalcViewData(newMapData, "regionOnly");
              //Update map choropleth
              updateMap($('#select-community').val(), $('#select-community-remove').val(), calcMapData);
              updateRegionMaps(regionMapData);

              //update community if they are on the choropleth
              if($("#community-container").hasClass('active')){
                buildProfileView(initData, parseInt($("#community-container").attr('data-geo')), $("#community-container").attr('data-region'));
              }
              hideLoading();
            },
            error: function (err){
              console.log(err);
            }
          });
      })


      //Empty the input values.
      $("input").val("");
      $("input[type='checkbox']:checked").each(function (i, checkbox){
        $(checkbox)[0].checked = false;
      });

      $("#re-check").click(function (){
          if ($("#re-check").prop("checked")){
              $("#re").show();
          }else{
            $("#re").hide();
          }
      });

      $("#dnd-check").click(function (){
          if ($("#dnd-check").prop("checked")){
              $("#dnd").show();
          }else{
            $("#dnd").hide();
          }
      });

      $("#imp-check").click(function (){
          if ($("#imp-check").prop("checked")){
              $("#imp").show();
          }else{
            $("#imp").hide();
          }
      });

      $('.modal').modal();

      $('.fixed-action-btn').floatingActionButton();

    });

    // end of document ready

// Impact tool  JS

$(document).ready(function (){

  //add-identifyimpact
  var whoWhatId = 0;
  $("#add-identify-btn").click(function (){
    $("#identifyimpact").append(
      '<div class="input-field col s4">'+
        '<input placeholder="(e.g EI applicants)" id="who_what_'+whoWhatId+'" type="text" class="validate">'+
        '<label for="who_what_'+whoWhatId+'">Who or what is impacted?</label>'+
      '</div>'+
      '<div class="input-field col s4">'+
        '<select>'+
          '<option value="" disabled selected>Choose your option</option>'+
          '<option value="1">Primary</option>'+
          '<option value="2">Secondary</option>'+
          '<option value="3">Unexpected/Unintended</option>'+
        '</select>'+
        '<label>Proximity of impact</label>'+
      '</div>'+
      '<div class="input-field col s4">'+
        '<select>'+
          '<option value="" disabled selected>Choose your option</option>'+
          '<option value="1">Access to goods, benefits or services</option>'+
          '<option value="2">Financial</option>'+
          '<option value="3">Property or equipment</option>'+
          '<option value="4">Reputation</option>'+
          '<option value="5">Emotional</option>'+
          '<option value="6">Life/safety</option>'+
          '<option value="7">Liberty/freedom</option>'+
          '<option value="8">Rights/intellectual Property</option>'+
          '<option value="9">Workforce Implementations</option>'+
        '</select>'+
        '<label>Type of impact</label>'+
      '</div>'
    );
    whoWhatId = whoWhatId + 1;
    $('select').formSelect();
  });

  // Moving through parts.
  $("#readytostart").click(function (){
    $("#part1").show();
    $("step2").hide();
  });

  $("#submitpart1").click(function(){
    $("#step1").hide();
  });

  $("#submitpart2").click(function(){
    $("#step2").hide();
  });

  $("#submitpart3").click(function(){
    $("#step3").hide();
  });

  $("#submitpart4").click(function(){
    $("#step4").hide();
  });

  // Showing each step.
  $('#step1tl').click(function(){
    $("#step1").show();
  });
  $('#step2tl').click(function(){
    $("#step2").show();
  });
  $('#step3tl').click(function(){
    $("#step3").show();
  });
  $('#step4tl').click(function(){
    $("#step4").show();
  });

  //Empty the input values.
  $("input").val("");
  $("input[type='checkbox']:checked").each(function (i, checkbox){
    $(checkbox)[0].checked = false;
  });

  $("#re-check").click(function (){
    if ($("#re-check").prop("checked")){
      $("#re").show();
    }else{
      $("#re").hide();
    }
  });

  $("#dnd-check").click(function (){
    if ($("#dnd-check").prop("checked")){
      $("#dnd").show();
    }else{
      $("#dnd").hide();
    }
  });

  $("#imp-check").click(function (){
    if ($("#imp-check").prop("checked")){
      $("#imp").show();
    }else{
      $("#imp").hide();
    }
  });

  $('.modal').modal();

  $('.fixed-action-btn').floatingActionButton();

  // Secection Boxes
  $('select').formSelect();
});

// adding images
$('.materialboxed').materialbox();




  })(jQuery); // end of jQuery name space
