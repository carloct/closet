package main

import (
	"net/http"

	"github.com/carloct/slcloset/shared/view"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	//view.SetLayout("layouts/base")
	view.Render(w, "home/index", nil)
}
