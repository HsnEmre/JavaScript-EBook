
//#region NameScpace by direct assigment
var setActivePage=function(){};
var getPage=function(){};
var redirectPage=function(){};

var navigationNs=navigationNs||{};
navigationNs.active=function(){};
//#endregion

//#region    Nested Namespaces
/*
When multiple modules are involved, avoid
 proliferating global names by creating a single global
  namespace. From
there, any sub-modules can be added to the global 
namespace. (Further nesting will slow down performance
     and
add unnecessary complexity.) Longer names can be
 used if name clashes are an issue:
*/
var NavigationNs=NavigationNs||{};
NavigationNs.active={};
NavigationNs.pagination={};
NavigationNs.redirection={};

// Navigational.pagination.jquery = function();
// Navigational.pagination.angular = function();
// Navigational.pagination.ember = function();

//#endregion