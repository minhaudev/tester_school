"use client";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import LayoutContainer from "./LayoutContainer";
import {useEffect, useState} from "react";
import ProcessFlow from "@/components/molecules/ProcessFlow";
import { processFlowData } from "@/faker";
export default function Home() {
    return <ProcessFlow flows={processFlowData}/>;
}
