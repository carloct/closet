package database

import (
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

var (
	DB *sqlx.DB
)

func Connect() {
	var err error

	if DB, err = sqlx.Connect("mysql", "slcloset:secret@tcp(192.168.10.10:3306)/slcloset"); err != nil {
		fmt.Printf("%+v", err)
	}

	if err = DB.Ping(); err != nil {
		fmt.Println("Database down")
	}
}
