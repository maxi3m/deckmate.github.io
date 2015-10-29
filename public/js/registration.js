// On page load...
$(function() {
 
  Parse.initialize("QWlOvmgg8hIVbJyA2BDF9558rxDNRyJIk1dHZtIv", "3WAaTWRerKvgl22YTw8eOPK9GHCRTBR4gVvOtGog");
  
  // handler for startup form submission
  $('#startup_form #send').on("click", function(event) {
    var $form = $('#startup_form');

    // Log the user out in case they're still logged in
    Parse.User.logOut();
    
    var data = convertFormToJSON($form);
    var user_data = {};
    user_data.password = Math.random().toString(36).substring(2);
    user_data.username = data.email;
    
    var user = new Parse.User(user_data);
    console.log(user);
    user.signUp(null, {
      success: function(user) {
        
        var startup = new Startup();
        startup.set("user", user);
  
        var startupData = {};
        startupData.company = {
          name: data.name,
          website: data.website,
          description: data.description
        };

        console.log(data)
        
        startupData.candidates = {
          roles: data.roles,
          locations: data.locations
        };
      
        startup.save(startupData, {
          success: function(startup){
            console.log('startup successfully saved');
            $(".signup.modal").modal(100);
          },
          error: function(startup, error){
            console.log('Startup could not be saved. Error: ')
            console.log(error);
            // $modal = $('.signup.modal');
            // $modal.find('.modal-title').text('Submission Error');
            // $modal.find('.modal-body p').text(error.message);
            // $modal.modal('show');
            window.alert("There was an error with your application: " + error.message);
          }

        });

      },
      error: function(user, error) {
        // $modal = $('.signup.modal');
        // $modal.find('.modal-title').text('Submission Error');
        // $modal.find('.modal-body p').text(error.message);
        console.log('Submission Error: ')
        console.log(error);
        // $modal.modal('show');
        window.alert("There was an error with your application: " + error.message);
      }
    });
    event.preventDefault();
    return false;
  });

  $('#intern_form #send').on("click", function(event) {
    var $form = $('#intern_form');

    // Log the user out in case they're still logged in
    Parse.User.logOut();
    
    var data = convertFormToJSON($form);
    var user_data = {};
    user_data.password = Math.random().toString(36).substring(2);
    user_data.username = data.email;
    
    var user = new Parse.User(user_data);
    // console.log(user);
    user.signUp(null, {
      success: function(user) {
          
        var hacker = new Hacker();
        hacker.set("user", user);
  
        var hackerData = {};
        hackerData.professional = {
          resume: data.resume,
          github: data.github,
          university: data.year,
          jobType: data.jobType,
          US_work_auth: false
        };
        
        if(US_authorized === "Yes") hackerData.professional.US_work_auth = true;

        hackerData.batchInfo = {
          roles: data.roles,
          startDate: data.startdate
        };

        hacker.save(hackerData, {
          success: function(hacker){
            console.log('hacker successfully saved');
            $(".signup.modal").fadeOut(100);
          },
          error: function(hacker, error){
            console.log('Hacker could not be saved. Error: ')
            console.log(error);
            window.alert("There was an error with your application: " + error.message);
          }
        });

      },
      error: function(user, error) {
        // $modal = $('.signup.modal');
        // $modal.find('.modal-title').text('Submission Error');
        // $modal.find('.modal-body p').text(error.message);
        console.log('Submission Error: ')
        console.log(error);
        // $modal.modal('show');
        // window.alert("There was an error with your application: " + error.message);
      }
    });
    event.preventDefault();
    return false;
  });
  
   // Our basic Startup model
  var Startup = Parse.Object.extend("Startup", {
    // Default attributes for the startup.
    defaults: {
      company: {
        name: "",
        website: "",
        description: "",
        size: 0,
      },
      candidates:{
        roles: [],
        locations: [],
        gradYears: [],
      },
      paidCurrentBatch: false,
      activated: false,
    },

    // Ensure that each todo created is linked to a parse user
    initialize: function() {
      if (!this.get("user")) {
        this.set({"user": Parse.User.current()});
      }
    },

    // Toggle the `done` state of this todo item.
    toggleActivation: function() {
      this.save({activated: !this.get("activated")});
    }
  });

  // Our basic Hacker model
  var Hacker = Parse.Object.extend("Hacker", {
    // Default attributes for the startup.
    defaults: {
      professional: {
        resume: "",
        linkedin: "",
        github: "",
        blurb: "",
        US_work_auth: false,
      },
      batchInfo:{
        roles: [],
        locations: [],
        gradYear: "",
      },
      currentBatch: "",
      rank: 0,
      passedScreen1: false,
      passedScreen2: false,
      activated: false,
    },

    // Ensure that each todo created is linked to a parse user
    initialize: function() {
      if (!this.get("user")) {
        this.set({"user": Parse.User.current()});
      }
    },

    // Toggle the `done` state of this todo item.
    toggleActivation: function() {
      this.save({activated: !this.get("activated")});
    }
  });

  // // This is the transient application state, not persisted on Parse
  // var AppState = Parse.Object.extend("AppState", {
  //   defaults: {
  //     showLanding: true
  //   }
  // });
  
  // // The Application
  // // ---------------

  // // The main view that lets a user manage their todo items
  // var StartupDashboardView = Parse.View.extend({

  //   // Delegated events for creating new items, and clearing completed ones.
  //   events: {
  //     "keypress #pay-batch":  "payBatch",
  //     "keypress #save-batch":  "updateBatchSettings",
  //     "click #save-profile": "saveProfile",
  //     "click .log-out": "logOut",
  //   },

  //   el: ".content",

  //   // At initialization we bind to the relevant events on the `Todos`
  //   // collection, when items are added or changed. Kick things off by
  //   // loading any preexisting todos that might be saved to Parse.
  //   initialize: function() {
  //     var self = this;

  //     _.bindAll(this, 'logOut');

  //     // Main todo management template
  //     this.$el.html(_.template($("#dashboard-template").html()));

      
  //     // Create our collection of Todos
  //     this.startup = Parse.Object.extend("Startup");
      
  //     // Setup the query for the collection to look for todos from the current user
  //     this.startup.query = new Parse.Query(Startup);
  //     this.startup.query.equalTo("user", Parse.User.current());
        

  //     // Fetch all the todo items for this user
  //     this.startup.fetch();

  //     state.on("change", this.filter, this);
  //   },

  //   // Re-rendering the App just means refreshing the statistics -- the rest
  //   // of the app doesn't change.
  //   render: function() {
  //     this.delegateEvents();
  //   },

  //   // Logs out the user and shows the login view
  //   logOut: function(e) {
  //     Parse.User.logOut();
  //     new LogInView();
  //     this.undelegateEvents();
  //     delete this;
  //   },
  // });

  // var LogInView = Parse.View.extend({
  //   events: {
  //     "submit form.login-form": "logIn",
  //   },

  //   el: ".content",
    
  //   initialize: function() {
  //     _.bindAll(this, "logIn");
  //     this.render();
  //   },

  //   logIn: function(e) {
  //     var self = this;
  //     var username = this.$("#login-username").val();
  //     var password = this.$("#login-password").val();
      
  //     Parse.User.logIn(username, password, {
  //       success: function(user) {
  //         new StartupDashboardView();
  //         self.undelegateEvents();
  //         delete self;
  //       },

  //       error: function(user, error) {
  //         self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
  //         self.$(".login-form button").removeAttr("disabled");
  //       }
  //     });

  //     this.$(".login-form button").attr("disabled", "disabled");

  //     return false;
  //   },
    
  //   render: function() {
  //     this.$el.html(_.template($("#login-template").html()));
  //     this.delegateEvents();
  //   }
  // });

  // var HomeView = Parse.View.extend({
  //   el: '.content',
  //   initialize: function(){
  //     this.render();
  //   },
  //   render: function() {
  //     this.$el.html(_.template($("#landingpage-template").html()));
  //     this.delegateEvents();
  //   }
  // });

  // // The main view for the app
  // var AppView = Parse.View.extend({
  //   // Instead of generating a new element, bind to the existing skeleton of
  //   // the App already present in the HTML.
  //   el: $("#dashboardApp"),

  //   initialize: function() {
  //     this.render();
  //   },

  //   render: function() {
  //     if(state.showLanding){
  //       console.log('homeView');
  //       new HomeView();
  //     }else{
  //       if (Parse.User.current()) {
  //         new StartupDashboardView();
  //       } else {
  //         console.log('rendered LogInView');
  //         new LogInView();
  //       }
  //     }
  //   }
  // });

  // var AppRouter = Parse.Router.extend({
  //   routes: {
  //     "dashboard": "dashboard",
  //     "login": "login",
  //     "home": "home"
  //   },

  //   initialize: function(options) {
  //   },

  //   home: function() {
  //     state.set({ showLanding: true });
  //   },

  //   dashboard: function() {
  //     state.set({ showLanding: false});
  //   },

  //   login: function() {
  //     state.set({ showLanding: false });
  //   }
  // });

  // var state = new AppState;

  // new AppRouter;
  // new AppView();
  // Parse.history.start();
});

function convertFormToJSON(form){
  var array = $(form).serializeArray();
  var json = {};
  
  jQuery.each(array, function() {
      json[this.name] = this.value || '';
  });
  
  return json;
}
