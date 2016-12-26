import Ember from 'ember';

const Band =  Ember.Object.extend({
  name: '',
  songs: [],

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  })
});

let Song = Ember.Object.extend({
  title: '',
  band: '',
  rating: 0
});

let blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

let yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

let pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

export default Ember.Route.extend({
  model() {
    let ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
    let pearlJan = Band.create({ name: 'Pearl Jan', songs: [yellowLedbetter] });
    let fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender] });

    return [ledZeppelin, pearlJan, fooFighters];
  }
});
