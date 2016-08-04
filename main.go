package main

import (
	"net/http"

	"github.com/carloct/slcloset/shared/database"
	"github.com/codegangsta/negroni"
	"github.com/gorilla/context"
	"github.com/julienschmidt/httprouter"
)

func main() {
	database.Connect()

	router := httprouter.New()
	router.GET("/", wh(HomeHandler))
	router.ServeFiles("/public/*filepath", http.Dir("public"))

	n := negroni.Classic()
	n.UseHandler(context.ClearHandler(router))

	http.ListenAndServe(":8080", n)
}

func wh(h http.HandlerFunc) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
		context.Set(r, "params", ps)
		h.ServeHTTP(w, r)
	}
}
