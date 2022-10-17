
   
<script type="text/javascript">
    
    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    function date_time()
    {
        var current_datetime = new Date();
        
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return hours+":"+minutes+":"+seconds;
    }
    document.getElementById('current_date_time_block').innerHTML = date_time();
</script> 
         <div id="current_date_time_block2"></div>

<script type="text/javascript">
    
    setInterval(function () {
        document.getElementById('current_date_time_block2').innerHTML = date_time();
    }, 1000);
</script>     
 <script language="javascript" type="text/javascript"><!--
var d = new Date();

var day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");

var month=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

document.write(day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()]
+ " " + d.getFullYear() + " г.");
//--></script>
       
