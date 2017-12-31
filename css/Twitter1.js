// JavaScript Document
 new TWTR.Widget({
          version: 2,
          type: 'profile',
          rpp: 6,
          interval: 6000,
          width: '200',
          height: 300,
          theme: {
            shell: {
              background: '#333333',
              color: '#ffffff'
            },
            tweets: {
              background: '#000000',
              color: '#ffffff',
              links: '#4aed05'
            }
          },
          features: {
            scrollbar: true,
            loop: false,
            live: false,
            hashtags: true,
            timestamp: true,
            avatars: false,
            behavior: 'all'
          }
        }).render().setUser('TrustyJAID').start();