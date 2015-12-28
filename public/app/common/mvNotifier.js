(function() {
    angular.module('app').value('mvToaster', toastr);

    angular.module('app').factory('mvNotifier', function(mvToaster) {
        return{
            notifysuccess:function (msg) {
                mvToaster.success(msg);
                console.log(msg);
            },
            notifyerror:function (msg) {
                mvToaster.error(msg);
                console.log(msg);
            },

        };
    });
})();
