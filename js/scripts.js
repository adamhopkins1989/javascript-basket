var basket = {
    basket: [],
    total: 0,
    add: function(item) {
        this.basket.push(item);
        this.update();

    },
    update: function() {

        $('#goHere').empty();
        var newTotal = 0;

        for (var i = 0; i < this.basket.length; i++) {
            var style = '<div style="width: 100%; background: white; padding: 10px; max-width: 960px; margin: auto; text-align: left;"><span>' + this.basket[i].description + '</span> <span>' + this.basket[i].price + '</span> <div class="remove" style="float: right;" data-id="' + this.basket[i].id + '" >X</div></div>';

            $('#goHere').append(style);

            newTotal = newTotal + this.basket[i].price;

        }
        total = newTotal;

        $('#total').text(total.toFixed(2));

    },
    remove: function(item) {
        var newBasket = [];

        for (var i = 0; i < this.basket.length; i++) {

            if (item === this.basket[i].id) {

            } else {
                newBasket.push(this.basket[i])
            }
        }
        var newTotal = 0;
        this.basket = [];
        this.basket = newBasket;
        this.update();



    },

    event: function() {
        var counter = 0;
        var self = this;
        $('.button').on("click", function() {
            var item = {};
            item.price = parseFloat($(this).data('price'));
            item.description = ($(this).data('description'));
            item.id = counter
            counter++
            self.add(item);


        });

        $('#goHere').on("click", '.remove', function() {
            var id = $(this).data('id')
            self.remove(id)

        });

    },
};

basket.event()

var root = 'http://jsonplaceholder.typicode.com';


$.ajax({
  url: root + '/posts/',
  method: 'GET'
}).then(function(data) {

  for (var i = 0; i < data.length; i++) {
      console.log(data[i].title);

      var adam = '<div style="width: 100%; background: black; color: #fff; text-align:center; padding: 10px; max-width: 960px; margin: auto; "><span>' + data[i].title + '"</div></div>';

      $('#lists').append(adam);
  }
});

