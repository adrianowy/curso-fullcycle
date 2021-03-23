package main

import (
	"google.golang.org/grpc"
	"log"
	"net"
)

func main() {

	lis, err := net.Listen("tcp", "localhost:5000")
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}

	grpcServer := grpc.Newserver()

	if err := grpcServer.Server(lis); err != nil {
		log.Fatalf("Could not serve: %v", err)
	}

}
