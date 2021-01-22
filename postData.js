'use strict'
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

function randomTag () {
  let result = [];
  for (let i = 0; i < 10; i++) {
    if (Math.round(Math.random())) {
      result.push(`Tag ${i}`);
    }
  }
  return result;
}

async function create (id) {
  client.index({
    index: 'test',
    type: '_doc',
    body: {
      title: `Test ${id}`,
      tags: randomTag()
    }
  });
}


async function run () {
  // Let's search!
  const start = Date.now();

  /*
  const {body} = await client.search({
    index: 'test',
    size: 10,
    body: {
      query: {
        bool: {
          should: [
            {
              match: {
                tags: "Tag 1"
              }
            }
          ]
        }
      }
    }
  });*/
  const {body} = await client.count({
    index: 'test',
    body: {
      query: {
        bool: {
          should: [
            {
              match: {
                tags: "Tag 5"
              }
            }
          ]
        }
      }
    }
  });
  //console.log(JSON.stringify(body, null, 2));
  console.log(body);
  /*
  const { body } = await client.search({
    index: 'test',
    body: {
      query: {
        match_all: {
        }
      }
    }
  });
  console.log(body.hits.hits[0]._source);
  */


  const end = Date.now();

  const elapse = end - start;
  console.log(`elapse time: ${elapse}`);
}

run().catch(console.log);

// PUT
/**
client.create({
  index: 'myindex',
  type: 'mytype',
  id: '1',
  body: {
    title: 'Test 1',
    tags: ['y', 'z']
  }
});
 */

// POST
/**
client.index({
  index: 'myindex',
  type: 'mytype',
  id: '1',
  body: {
    title: 'Test 1',
    tags: ['y', 'z'],
    published: true,
  }
});
 */

// DELETE
/**
client.delete({
  index: 'myindex',
  type: 'mytype',
  id: '1'
});

client.deleteByQuery({
  index: 'posts',
  body: {
    query: {
      term: { published: false }
    }
  }
});
 */

// GET
/**
client.get({
  index: 'myindex',
  type: 'mytype',
  id: 1
});
 */

// UPDATE
/**
client.update({
  index: 'myindex',
  type: 'mytype',
  id: '1',
  body: {
    // put the partial document under the `doc` key
    doc: {
      title: 'Updated'
    }
  }
})

client.updateByQuery({});
 */