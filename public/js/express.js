$( document ).ready(function() {

    console.log()

    const vm = new Vue({
        el: '#calendar-vue',
        data:{
            message: 'Hello Vue !',
            title:'test'
        },
        methods: {
            HandleCLick: function () {
                console.log('alert');
                this.message = this.message.split('').reverse().join('')
            }
        },
        computed:{
            CalendarFunction: function () {
                moment.locale('fr');
                moment().format('LL')
                const startWeek = moment().startOf('month').week();
                const endWeek = moment().endOf('month').week();

                console.log(moment().startOf('month').month());

                let calendar = [];
                let calndar_days = [];
                for(var week = startWeek; week<49;week++){
                    calendar.push({
                        week:week,
                        days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
                    })
                }

                calendar.forEach(function(item){
                    item.days.forEach(function(single_item){
                        if(moment()._d == single_item._d){
                            calndar_days.push({day:single_item._d, active:true});
                        }else {
                            calndar_days.push({day:single_item._d, active:false});

                        }
                    });


                });
                console.log(calndar_days)

                return calndar_days
            }
        }
    })
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    var params = {test:'test'};
    var link ='test';
    var myInit = { method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };
    fetch(link,myInit)
        .then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));
});