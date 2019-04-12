$(document).ready(function() {

//Nightly Packages
	var nightly_pack = "";
	var nightly_versions_json = "https://product-dist.cellery.io/nightly/nightly_release.json";
	var nightly_download_url = "";		

    $("#nightlyPackContainer").hide();

    $.getJSON(nightly_versions_json, function(nightly_pack) {

        $("#nightlyPackContainer").show();
        var version = nightly_pack['version'];
        var version_pack = version.replace(/ /g, "-").toLowerCase();
        var released_date = nightly_pack['release-date'];

	const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var current_datetime = new Date(released_date);
	var released_date = months[current_datetime.getMonth()] + " " + current_datetime.getDate() + "," + current_datetime.getFullYear();
	$("#nightlyInfo").html(released_date);

        var nightly_packs =  [nightly_pack['linux-installer'], nightly_pack['macos-installer']];
        var i = 0;
        var product_dist_path = nightly_download_url + "/"+version+"/";

        if (nightly_packs.length == 0) {
            $("#nightlyPackContainer").hide();
        }

        $.each(nightly_packs, function(key, value) {

            release_content = "<tr>";
            release_content += "<td style=\"width: 96%\">" + value + "</td>";
            release_content += "<td style=\"width: 1%; white-space: nowrap;\">";
            release_content += "<a href=\"" + product_dist_path + value + "\" class=\"cDownloadLinkIcon\"><img src=\"../img/download-bg-green-fill.svg\"></a>";
            release_content += "</td>";
            release_content += "</tr>";

            $("#nightlyPackages0").append(release_content);
            i++;
        });                

    }).fail(function(jqXHR, textStatus, errorThrown) {$("#nightlyPackContainer").hide();})

});
