// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.collection.on('add', this.render, this);
    this.collection.on('add', function(){
      console.log('SongQueueView render on add');
    }, this);

    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    console.log('render on add');

    this.collection.forEach(function(song) {
      var songQueueEntryView = new SongQueueEntryView({model:song});
      this.$el.append(songQueueEntryView.render());
    }, this);
    //console.log(this);
    //call SongQueueEntryView render
    // loop through the queues
    return this.$el;
  }

});
