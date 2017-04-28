/**
 * Permet d'avoir une classe JS pour les outils du projet.
 * @author: alexandre priou
 * @date : 2017
 */
var tools = {
		/**
		 * Permet de faire un appel ajax
		 */
}
		callAjax = function(url,data,methode,typeData) {
		        var answer = "";
		        $.ajax({
		            url : url,
		            data : data,
		            dataType : typeData,
		            method : methode,
		            cache : false,
		            async : false,
		            success : function(data) {
		                answer = data;
		            },
		            error : function(data){
		            	answer = -1;
		            }

		        });
		        return answer;
		},
};