const { createApp } = Vue;

createApp({
    data() {
        return {
            activeContact: 0,
            newMessage: '',
            newResponse: [
                'ma che dici?!',
                'certo che no!',
                'ti amo anche io',
                'si, si, come no',
                'Piuttosto mi ammazzo!',
                'ma veramente?!',
                'uffa',
                'lo sai che puzzi?',
                'sei proprio un cretino.',
                'si, ma prima dimmi dove vai.'
            ],
            ricerca: '',
            mioProfilo: {
                name: 'Gabriele',
                avatar: 'img/mia-foto.jpeg',
                visible: true
            },
            contacts: [
                {
                    name: 'Ciccio e Franco',
                    avatar: 'img/Franco-Ciccio.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Herbert Ballerina',
                    avatar: 'img/Herbert-Ballerina.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Pippo Franco',
                    avatar: 'img/Pippo-Franco.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Pippo Baudo',
                    avatar: 'img/Pippo-Baudo.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Iva Zanicchi',
                    avatar: 'img/Iva-Zanicchi.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Maccio Capatonda',
                    avatar: 'img/Maccio-Capatonda.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Paperon De Paperoni',
                    avatar: 'img/Paperon-DePaperoni.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Mariangela Fantozzi',
                    avatar: 'img/Mariangela-Fantozzi.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]  
        }
    },
    methods: {
        activateContact(index) {
            this.activeContact = index;
        },
        creaMessage(sentOrRecived, messaggio){
            const now = new Date();
            let h = this.addZero(now.getHours());
            let m = this.addZero(now.getMinutes());
            let oraMsg = h + ':' + m;
            const objMessage = {
                date: oraMsg,
                message: messaggio,
                status: sentOrRecived
            };
            this.contacts[this.activeContact].messages.push(objMessage);
            this.newMessage = '';
        },
        addZero(i) {
            if (i < 10) {
                i = '0' + i;
            }
            return i;
        },
        addMessage() {
            this.creaMessage('sent', this.newMessage);
            setTimeout(() => {
                const numero = this.generaNumero();
                this.creaMessage('recived', this.newResponse[numero]);
                console.log(numero, this.newResponse);
            }, 1000);
        },
        generaNumero(){
            let numero = Math.floor(Math.random() * 10);
            return numero;
        },
        cercanome(){
            let ricerca = this.ricerca.toLowerCase();
            this.contacts.forEach(element => {
                element.visible = element.name.toLowerCase().includes(ricerca);

                // if(element.name.toLowerCase().includes(ricerca)){
                //     element.visible = true;
                // }else{
                //     element.visible = false;
                // }

                console.log(element);
            })
        } 
    }
}).mount("#app");

