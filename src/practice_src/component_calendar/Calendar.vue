<template>
    <div class="calendar_wrapper">
        <WeekHeader
            :propsYear="year"
            :propsMonth="month"
            :propshandleLastMonth="handleLastMonth"
            :propshandleNextMonth="handleNextMonth">
        </WeekHeader>
        <WeekDay
            :propsMonthArr="monthArr"
            @initRenderMonthDays="calcMonthDays()">
        </WeekDay>
    </div>
</template>

<script>
    import WeekHeader from './WeekHeader.vue';
    import WeekDay from './Weekday.vue';

    export default {
        data() {
            return {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                monthArr: []
            }
        },

        methods: {
            handleLastMonth() {
                if (this.month == 1) {
                    this.year--
                    this.month = 12;
                } else {
                    this.month--;
                }
            },
            handleNextMonth() {
                if (this.month == 12) {
                    this.year++
                    this.month = 1;   
                } else {
                    this.month++;
                }
            },
            calcMonthDays(yearVal = this.year, monthVal = this.month) {
                const monthdFirstDayVal = new Date(yearVal, monthVal-1, 1).getDay();
				const monthLengthVal = new Date(yearVal, monthVal, 0).getDate();

                this.monthArr = [];

				for ( let i = 1 ; i <= monthdFirstDayVal ; i++ ) {
					this.monthArr.splice(0, 0, '　');
				}

				for ( let i = 1 ; i <= monthLengthVal ; i++ ) {
					this.monthArr.push(i);
                }
            }
        },
        components: {
            WeekHeader,
            WeekDay
        },
        watch: {
            month: function() {
                this.calcMonthDays(this.year, this.month);  
            }
        }
    }
</script>

<style>
    .calendar_wrapper {
        width: 300px;
    }

</style>