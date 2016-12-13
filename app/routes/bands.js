import Ember from 'ember';

const Band =  Ember.Object.extend({ name: '' });

export default Ember.Route.extend({
  model() {
    let ledZeppelin = Band.create({ name: 'Led Zeppelin' });
    let pearlJan = Band.create({ name: 'Pearl Jan' });
    let fooFighters = Band.create({ name: 'Foo Fighters' });

    return [ledZeppelin, pearlJan, fooFighters];
  }
});
