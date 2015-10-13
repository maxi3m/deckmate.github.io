// On page load...
$(function() {
 
 Parse.initialize("QWlOvmgg8hIVbJyA2BDF9558rxDNRyJIk1dHZtIv", "3WAaTWRerKvgl22YTw8eOPK9GHCRTBR4gVvOtGog");
  
  // handler for startup form submission
  
  $('#startup_form').submit(function(event) {
    var $form = $('#startup_form');

    // Log the user out in case they're still logged in
    Parse.User.logOut();
    
    var data = convertFormToJSON($form);
    var user_data = {};
    user_data.password = Math.random().toString(36).substring(2);
    user_data.username = data.email;
    
    var user = new Parse.User();
    user.signUp(data, {
      success: function(user) {
        
        $modal = $('.signup.modal');
        $modal.modal('hide');
        
        var startup = new Startup();
        startup.set("user", user);
  
        var startupData.company = {
          name: data.name,
          url: data.url,
          description: data.description
        };
        
        var startupData.candidates = {
          roles: data.roles,
          locations: data.locations
        };
        
    
        startup.save(startupData, {
          success: function(startup){
            console.log('startup successfully saved');
          },
          error: function(startup, error){
            console.log('Startup could not be saved. Error: '+error.message);
          }
        });

      },
      error: function(user, error) {
        // $modal = $('.signup.modal');
        // $modal.find('.modal-title').text('Submission Error');
        // $modal.find('.modal-body p').text(error.message);
        console.error('Submission Error: '+error.messasge);
        // $modal.modal('show');
        // window.alert("There was an error with your application: " + error.message);
      }
    });
    event.preventDefault();

  });
  
   // Our basic Startup model
  var Todo = Parse.Object.extend("Startup", {
    // Default attributes for the startup.
    defaults: {
      company: {
        name: "",
        url: "",
        description: "",
        size: "",
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

  // This is the transient application state, not persisted on Parse
  var AppState = Parse.Object.extend("AppState", {
    defaults: {
      filter: "all"
    }
  });
  
  // The Application
  // ---------------

  // The main view that lets a user manage their todo items
  var StartupDashboardView = Parse.View.extend({

    // Delegated events for creating new items, and clearing completed ones.
    events: {
      "keypress #pay-batch":  "payBatch",
      "keypress #save-batch":  "updateBatchSettings",
      "click #save-profile": "saveProfile",
      "click .log-out": "logOut",
    },

    el: ".content",

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved to Parse.
    initialize: function() {
      var self = this;

      _.bindAll(this, 'logOut');

      // Main todo management template
      this.$el.html(_.template($("#dashboard-template").html()));

      
      // Create our collection of Todos
      this.startup = Parse.Object.extend("Startup");
      
      // Setup the query for the collection to look for todos from the current user
      this.startup.query = new Parse.Query(Startup);
      this.startup.query.equalTo("user", Parse.User.current());
        

      // Fetch all the todo items for this user
      this.startup.fetch();

      state.on("change", this.filter, this);
    },

    // Logs out the user and shows the login view
    logOut: function(e) {
      Parse.User.logOut();
      new LogInView();
      this.undelegateEvents();
      delete this;
    },

  });

  var LogInView = Parse.View.extend({
    events: {
      "submit form.login-form": "logIn",
    },

    el: ".content",
    
    initialize: function() {
      _.bindAll(this, "logIn", "signUp");
      this.render();
    },

    logIn: function(e) {
      var self = this;
      var username = this.$("#login-username").val();
      var password = this.$("#login-password").val();
      
      Parse.User.logIn(username, password, {
        success: function(user) {
          new ManageTodosView();
          self.undelegateEvents();
          delete self;
        },

        error: function(user, error) {
          self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
          self.$(".login-form button").removeAttr("disabled");
        }
      });

      this.$(".login-form button").attr("disabled", "disabled");

      return false;
    },
    
    render: function() {
      this.$el.html(_.template($("#login-template").html()));
      this.delegateEvents();
    }
  });

  // The main view for the app
  var AppView = Parse.View.extend({
    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $("#todoapp"),

    initialize: function() {
      this.render();
    },

    render: function() {
      if (Parse.User.current()) {
        new StartupDashboardView();
      } else {
        new LogInView();
      }
    }
  });

  var AppRouter = Parse.Router.extend({
    routes: {
      "all": "all",
      "active": "active",
      "completed": "completed"
    },

    initialize: function(options) {
    },

    all: function() {
      state.set({ filter: "all" });
    },

    active: function() {
      state.set({ filter: "active" });
    },

    completed: function() {
      state.set({ filter: "completed" });
    }
  });

  var state = new AppState;

  new AppRouter;
  new AppView;
  Parse.history.start();
});
});

function convertFormToJSON(form){
  var array = $(form).serializeArray();
  var json = {};
  
  jQuery.each(array, function() {
      json[this.name] = this.value || '';
  });
  
  return json;
}
